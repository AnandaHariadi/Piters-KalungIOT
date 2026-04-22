'use server';
/**
 * @fileOverview An AI Health Coach flow that provides personalized health recommendations
 * based on real-time and historical biomarker trends.
 *
 * - aiHealthCoachRecommendations - A function that handles the health recommendation process.
 * - AIHealthCoachRecommendationsInput - The input type for the aiHealthCoachRecommendations function.
 * - AIHealthCoachRecommendationsOutput - The return type for the aiHealthCoachRecommendations function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIHealthCoachRecommendationsInputSchema = z.object({
  currentHeartbeat: z.number().describe('The user\'s current heart rate in beats per minute (bpm).'),
  currentActivityStatus: z.string().describe('The user\'s current activity status (e.g., "active", "resting", "exercising").'),
  currentCholesterolIndex: z.number().describe('The user\'s current cholesterol biomarker index.'),
  historicalData: z.array(
    z.object({
      date: z.string().describe('The date of the historical record in YYYY-MM-DD format.'),
      heartbeat: z.number().describe('Heart rate in bpm for the historical record.'),
      activityStatus: z.string().describe('Activity status for the historical record.'),
      cholesterolIndex: z.number().describe('Cholesterol biomarker index for the historical record.'),
    })
  ).describe('An array of historical health data records, sorted chronologically.'),
});
export type AIHealthCoachRecommendationsInput = z.infer<typeof AIHealthCoachRecommendationsInputSchema>;

const AIHealthCoachRecommendationsOutputSchema = z.object({
  summary: z.string().describe('A summary of the user\'s current and historical health status.'),
  recommendations: z.array(z.string()).describe('An array of personalized health recommendations.'),
  lifestyleChanges: z.array(z.string()).describe('An array of suggested lifestyle changes.'),
  actionableSteps: z.array(z.string()).describe('An array of concrete actionable steps the user can take.'),
});
export type AIHealthCoachRecommendationsOutput = z.infer<typeof AIHealthCoachRecommendationsOutputSchema>;

export async function aiHealthCoachRecommendations(input: AIHealthCoachRecommendationsInput): Promise<AIHealthCoachRecommendationsOutput> {
  return aiHealthCoachRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiHealthCoachRecommendationsPrompt',
  input: { schema: AIHealthCoachRecommendationsInputSchema },
  output: { schema: AIHealthCoachRecommendationsOutputSchema },
  prompt: `You are an AI Health Coach for the PITERS Health Portal. Your goal is to provide personalized and adaptive health recommendations based on the user's real-time and historical biomarker trends. Analyze the provided data comprehensively to offer actionable advice on lifestyle changes and specific steps to improve health.

Here is the user's current health data:
- Current Heartbeat: {{{currentHeartbeat}}} bpm
- Current Activity Status: {{{currentActivityStatus}}}
- Current Cholesterol Index: {{{currentCholesterolIndex}}}

Here is the user's historical health data (last few entries, if available):
{{#if historicalData}}
{{#each historicalData}}
- Date: {{{date}}}, Heartbeat: {{{heartbeat}}} bpm, Activity: {{{activityStatus}}}, Cholesterol Index: {{{cholesterolIndex}}}
{{/each}}
{{else}}
No historical data available.
{{/if}}

Based on this information, provide a concise summary of the user's health status, followed by specific and adaptive recommendations, lifestyle changes, and actionable steps. Ensure the recommendations are practical and easy to understand.`,
});

const aiHealthCoachRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiHealthCoachRecommendationsFlow',
    inputSchema: AIHealthCoachRecommendationsInputSchema,
    outputSchema: AIHealthCoachRecommendationsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to get recommendations from the AI coach.');
    }
    return output;
  }
);
