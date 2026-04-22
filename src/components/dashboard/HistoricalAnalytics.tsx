"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

const weeklyData = [
  { day: 'Sen', heartbeat: 72, cholesterol: 180, steps: 8000, sleep: 7.5 },
  { day: 'Sel', heartbeat: 75, cholesterol: 182, steps: 6500, sleep: 6.8 },
  { day: 'Rab', heartbeat: 70, cholesterol: 178, steps: 10200, sleep: 8.2 },
  { day: 'Kam', heartbeat: 78, cholesterol: 181, steps: 4500, sleep: 5.5 },
  { day: 'Jum', heartbeat: 74, cholesterol: 180, steps: 9000, sleep: 7.0 },
  { day: 'Sab', heartbeat: 68, cholesterol: 175, steps: 12000, sleep: 9.0 },
  { day: 'Min', heartbeat: 71, cholesterol: 176, steps: 7000, sleep: 8.5 },
];

export function HistoricalAnalytics() {
  return (
    <div className="space-y-10">
      <Card className="border-none shadow-xl shadow-primary/5 bg-white overflow-hidden">
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 border-b border-border/40">
          <div>
            <CardTitle className="text-2xl font-extrabold tracking-tight text-foreground">Analitik Historis</CardTitle>
            <CardDescription className="text-sm font-medium">Laporan mendalam tren kesehatan Anda</CardDescription>
          </div>
          <Tabs defaultValue="weekly" className="w-full md:w-[300px]">
            <TabsList className="grid w-full grid-cols-2 bg-muted/40 p-1 rounded-xl">
              <TabsTrigger value="weekly" className="rounded-lg font-bold">Mingguan</TabsTrigger>
              <TabsTrigger value="monthly" className="rounded-lg font-bold">Bulanan</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="p-8 space-y-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground tracking-wide uppercase">Biomarker Trends</h4>
                  <p className="text-[11px] text-muted-foreground">Monitor detak jantung vs kolesterol</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-[10px] font-bold text-muted-foreground">BPM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-[10px] font-bold text-muted-foreground">Cholesterol</span>
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyData}>
                    <defs>
                      <linearGradient id="colorHb" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border)/0.3)" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 700 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="heartbeat" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorHb)" />
                    <Area type="monotone" dataKey="cholesterol" stroke="hsl(var(--accent))" strokeWidth={3} fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-foreground tracking-wide uppercase">Weekly Recap</h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">Avg. Sleep</span>
                    <ArrowUpRight className="h-3 w-3 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-black text-emerald-900">7.5 <span className="text-xs font-normal">hours</span></p>
                  <p className="text-[10px] text-emerald-600 font-medium">+12% dari minggu lalu</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-blue-700 uppercase">Total Steps</span>
                    <ArrowUpRight className="h-3 w-3 text-blue-600" />
                  </div>
                  <p className="text-2xl font-black text-blue-900">59,200</p>
                  <p className="text-[10px] text-blue-600 font-medium">Target tercapai 6/7 hari</p>
                </div>
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-rose-700 uppercase">Stress Episodes</span>
                    <Minus className="h-3 w-3 text-rose-600" />
                  </div>
                  <p className="text-2xl font-black text-rose-900">2</p>
                  <p className="text-[10px] text-rose-600 font-medium">Sama dengan minggu lalu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-foreground tracking-wide uppercase">Intensitas Aktivitas Harian</h4>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 700 }} />
                  <Tooltip cursor={{ fill: 'hsl(var(--primary)/0.05)' }} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                  <Bar dataKey="steps" radius={[4, 4, 4, 4]} barSize={40}>
                    {weeklyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.steps >= 10000 ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground)/0.3)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground tracking-wide uppercase">Catatan Harian Terbaru</h4>
            <div className="rounded-2xl border border-border/40 overflow-hidden bg-white shadow-sm">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="font-bold text-[10px] uppercase">Hari</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase">Langkah</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase">BPM (Avg)</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase">Kolesterol</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase">Tidur</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {weeklyData.slice().reverse().map((row) => (
                    <TableRow key={row.day} className="hover:bg-muted/10 transition-colors">
                      <TableCell className="font-bold text-sm">{row.day}</TableCell>
                      <TableCell className="text-xs font-medium">{row.steps.toLocaleString()}</TableCell>
                      <TableCell className="text-xs font-medium">{row.heartbeat}</TableCell>
                      <TableCell className="text-xs font-medium">{row.cholesterol} mg/dL</TableCell>
                      <TableCell className="text-xs font-medium">{row.sleep} jam</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline" className={row.steps >= 8000 ? "text-emerald-600 bg-emerald-50 border-emerald-100" : "text-amber-600 bg-amber-50 border-amber-100"}>
                          {row.steps >= 8000 ? "Bagus" : "Perlu Gerak"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
