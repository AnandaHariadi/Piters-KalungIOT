
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, BrainCircuit, CheckCircle2, ListTodo, Lightbulb, RefreshCcw } from "lucide-react";
import { aiHealthCoachRecommendations, AIHealthCoachRecommendationsOutput } from "@/ai/flows/ai-health-coach-recommendations";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export function AIHealthCoach() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<AIHealthCoachRecommendationsOutput | null>(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const result = await aiHealthCoachRecommendations({
        currentHeartbeat: 74,
        currentActivityStatus: "resting",
        currentCholesterolIndex: 180,
        historicalData: [
          { date: "2023-10-25", heartbeat: 72, activityStatus: "active", cholesterolIndex: 185 },
          { date: "2023-10-24", heartbeat: 75, activityStatus: "resting", cholesterolIndex: 188 },
          { date: "2023-10-23", heartbeat: 70, activityStatus: "active", cholesterolIndex: 190 },
        ]
      });
      setRecommendations(result);
    } catch (error) {
      console.error("AI Recommendation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-2xl shadow-primary/5 bg-white h-full flex flex-col overflow-hidden">
      <CardHeader className="bg-primary/[0.02] border-b border-border/40 p-8">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-bold tracking-wider uppercase text-[10px]">PITERS Intelligent AI</Badge>
          {recommendations && (
            <button onClick={fetchRecommendations} className="text-muted-foreground hover:text-primary transition-colors">
              <RefreshCcw className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center h-12 w-12 bg-primary rounded-2xl shadow-lg shadow-primary/30">
            <BrainCircuit className="text-white h-7 w-7" />
          </div>
          <div>
            <CardTitle className="text-xl font-extrabold tracking-tight">AI Health Coach</CardTitle>
            <CardDescription className="text-sm font-medium">Asisten kesehatan pribadi Anda</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-8 flex-1">
        {!recommendations && !loading && (
          <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-6">
            <div className="relative">
              <Sparkles className="h-16 w-16 text-primary/10 mx-auto" />
              <div className="absolute inset-0 bg-primary/5 blur-2xl -z-10 rounded-full" />
            </div>
            <div className="space-y-2">
              <p className="font-bold text-foreground">Butuh Wawasan Kesehatan?</p>
              <p className="text-sm text-muted-foreground max-w-[240px] leading-relaxed font-medium">
                Dapatkan analisis mendalam dan langkah konkret berdasarkan tren biomonitoring Anda.
              </p>
            </div>
            <Button onClick={fetchRecommendations} className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold">
              Generate Wawasan AI
            </Button>
          </div>
        )}

        {loading && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-24 w-full rounded-xl" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          </div>
        )}

        {recommendations && !loading && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-muted/30 p-5 rounded-2xl border border-border/40 relative">
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2 text-sm tracking-wide uppercase">
                <CheckCircle2 className="h-4 w-4" /> Ringkasan Kesehatan
              </h4>
              <p className="text-sm leading-relaxed text-foreground font-medium">{recommendations.summary}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground flex items-center gap-2 text-sm tracking-wide uppercase">
                  <Lightbulb className="h-4 w-4 text-yellow-500" /> Rekomendasi
                </h4>
                <div className="space-y-3">
                  {recommendations.recommendations.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3 bg-white rounded-xl border border-border/20 shadow-sm">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-xs font-semibold leading-relaxed text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-foreground flex items-center gap-2 text-sm tracking-wide uppercase">
                  <ListTodo className="h-4 w-4 text-accent" /> Langkah Nyata
                </h4>
                <div className="space-y-3">
                  {recommendations.actionableSteps.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3 bg-white rounded-xl border border-border/20 shadow-sm">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-xs font-semibold leading-relaxed text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/40">
               <h4 className="font-bold text-foreground mb-4 text-xs tracking-widest uppercase">Perubahan Gaya Hidup</h4>
               <div className="flex flex-wrap gap-2">
                  {recommendations.lifestyleChanges.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1 bg-primary/5 text-primary border-none font-bold text-[10px] tracking-wide">
                      {item}
                    </Badge>
                  ))}
               </div>
            </div>
            
            <Button variant="ghost" className="w-full text-muted-foreground hover:text-primary font-bold text-xs uppercase tracking-widest" onClick={() => setRecommendations(null)}>
              Reset Analisis
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
