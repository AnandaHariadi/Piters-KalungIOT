
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Droplets, Zap, TrendingUp, ChevronRight, Wind, Thermometer, Brain } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";

const mockLiveData = [
  { time: '10:00', bpm: 72, cholesterol: 180, spo2: 98 },
  { time: '10:05', bpm: 75, cholesterol: 182, spo2: 97 },
  { time: '10:10', bpm: 80, cholesterol: 178, spo2: 99 },
  { time: '10:15', bpm: 78, cholesterol: 181, spo2: 98 },
  { time: '10:20', bpm: 74, cholesterol: 180, spo2: 98 },
  { time: '10:25', bpm: 72, cholesterol: 179, spo2: 98 },
];

export function MonitoringDashboard() {
  const [currentBpm, setCurrentBpm] = useState(72);
  const [currentTemp, setCurrentTemp] = useState(36.6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBpm(prev => prev + (Math.floor(Math.random() * 3) - 1));
      setCurrentTemp(prev => parseFloat((prev + (Math.random() * 0.2 - 0.1)).toFixed(1)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Heart Rate */}
        <Card className="border-none shadow-xl shadow-primary/5 bg-white group hover:translate-y-[-4px] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                <Heart className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Detak Jantung</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold">{currentBpm}</span>
              <span className="text-xs font-bold text-muted-foreground">BPM</span>
            </div>
            <div className="mt-4 h-12 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockLiveData}>
                  <Line type="monotone" dataKey="bpm" stroke="#f43f5e" strokeWidth={2} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* SpO2 */}
        <Card className="border-none shadow-xl shadow-blue-500/5 bg-white group hover:translate-y-[-4px] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                <Wind className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Saturasi Oksigen</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold">98</span>
              <span className="text-xs font-bold text-muted-foreground">%</span>
            </div>
            <Badge className="mt-2 bg-blue-50 text-blue-600 border-none text-[10px]">Optimal</Badge>
          </CardContent>
        </Card>

        {/* Temperature */}
        <Card className="border-none shadow-xl shadow-orange-500/5 bg-white group hover:translate-y-[-4px] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
                <Thermometer className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Suhu Tubuh</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold">{currentTemp}</span>
              <span className="text-xs font-bold text-muted-foreground">°C</span>
            </div>
            <Badge className="mt-2 bg-orange-50 text-orange-600 border-none text-[10px]">Normal</Badge>
          </CardContent>
        </Card>

        {/* Stress Level */}
        <Card className="border-none shadow-xl shadow-purple-500/5 bg-white group hover:translate-y-[-4px] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-500">
                <Brain className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Tingkat Stres</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold">Rendah</span>
            </div>
            <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[24%]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Detail Kolesterol */}
        <Card className="border-none shadow-xl shadow-emerald-500/5 bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-bold">Analisis Kolesterol (LDL/HDL)</CardTitle>
              <Badge variant="outline" className="border-emerald-200 text-emerald-600 bg-emerald-50">Sangat Baik</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-muted/30 border border-border/40">
                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Total Kolesterol</p>
                <p className="text-2xl font-black">180 <span className="text-xs font-normal">mg/dL</span></p>
              </div>
              <div className="p-4 rounded-2xl bg-muted/30 border border-border/40">
                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Indeks Resiko</p>
                <p className="text-2xl font-black text-emerald-600">3.2</p>
              </div>
            </div>
            <div className="space-y-4">
               <div className="space-y-1">
                 <div className="flex justify-between text-xs font-bold">
                   <span>LDL (Kolesterol Jahat)</span>
                   <span>92 mg/dL</span>
                 </div>
                 <div className="h-2 bg-muted rounded-full"><div className="h-full bg-primary w-[46%] rounded-full" /></div>
               </div>
               <div className="space-y-1">
                 <div className="flex justify-between text-xs font-bold">
                   <span>HDL (Kolesterol Baik)</span>
                   <span>58 mg/dL</span>
                 </div>
                 <div className="h-2 bg-muted rounded-full"><div className="h-full bg-emerald-500 w-[72%] rounded-full" /></div>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity & Step Tracking */}
        <Card className="border-none shadow-xl shadow-primary/5 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Aktivitas & Kalori</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center justify-around text-center">
              <div>
                <p className="text-2xl font-black">4.520</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Langkah</p>
              </div>
              <div className="h-10 w-px bg-border/60" />
              <div>
                <p className="text-2xl font-black">320</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">kkal terbakar</p>
              </div>
              <div className="h-10 w-px bg-border/60" />
              <div>
                <p className="text-2xl font-black">45</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">menit aktif</p>
              </div>
            </div>
            <div className="relative pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold">Target Harian (10.000 Langkah)</span>
                <span className="text-xs font-bold text-primary">45%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary shadow-[0_0_12px_rgba(37,99,235,0.4)]" style={{ width: '45%' }} />
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors">
              Lihat Riwayat Pergerakan <ChevronRight className="h-3 w-3" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
