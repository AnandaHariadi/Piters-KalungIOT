"use client"

import React, { useState } from 'react';
import { MonitoringDashboard } from "@/components/dashboard/MonitoringDashboard";
import { AIHealthCoach } from "@/components/dashboard/AIHealthCoach";
import { EWSAlert } from "@/components/dashboard/EWSAlert";
import { HistoricalAnalytics } from "@/components/dashboard/HistoricalAnalytics";
import { FamilySync } from "@/components/dashboard/FamilySync";
import { TeleconsultationAI } from "@/components/dashboard/TeleconsultationAI";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarInset, SidebarFooter as SidebarFooterUI } from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Activity, History, Settings, LogOut, Bell, Search, Stethoscope, Brain, Battery, Signal, Zap, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#F8FAFC]">
        <Sidebar className="border-r border-border/50 bg-white">
          <SidebarHeader className="h-20 flex items-center px-6 border-b border-border/40">
            <div className="flex items-center gap-3">
              <div className="bg-primary flex items-center justify-center h-10 w-10 rounded-xl shadow-lg shadow-primary/20">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">PITERS</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeTab === 'dashboard'} 
                  onClick={() => setActiveTab('dashboard')} 
                  className="h-11 px-4 rounded-lg transition-all duration-200"
                >
                  <LayoutDashboard className="h-5 w-5" /> 
                  <span className="font-bold">Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeTab === 'analytics'} 
                  onClick={() => setActiveTab('analytics')}
                  className="h-11 px-4 rounded-lg transition-all duration-200"
                >
                  <History className="h-5 w-5" /> 
                  <span className="font-bold">Riwayat & Analitik</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeTab === 'family'} 
                  onClick={() => setActiveTab('family')}
                  className="h-11 px-4 rounded-lg transition-all duration-200"
                >
                  <Users className="h-5 w-5" /> 
                  <span className="font-bold">Family Sync</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeTab === 'teleconsultation'} 
                  onClick={() => setActiveTab('teleconsultation')}
                  className="h-11 px-4 rounded-lg transition-all duration-200"
                >
                  <Stethoscope className="h-5 w-5" /> 
                  <span className="font-bold">Telekonsultasi AI</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <div className="mt-8 px-4">
              <h5 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4">Device Status</h5>
              <div className="space-y-4 p-4 rounded-2xl bg-muted/30 border border-border/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold text-foreground">Baterai</span>
                  </div>
                  <span className="text-xs font-black">82%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Signal className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold text-foreground">Koneksi</span>
                  </div>
                  <span className="text-xs font-black">Kuat</span>
                </div>
                <div className="pt-2">
                  <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[82%] shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                  </div>
                </div>
              </div>
            </div>
          </SidebarContent>
          <SidebarFooterUI className="p-4 border-t border-border/40">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-11 px-4 rounded-lg text-muted-foreground hover:text-foreground">
                  <Settings className="h-5 w-5" /> 
                  <span className="font-bold">Pengaturan</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-11 px-4 rounded-lg text-destructive hover:bg-destructive/5">
                  <LogOut className="h-5 w-5" /> 
                  <span className="font-bold">Keluar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooterUI>
        </Sidebar>

        <SidebarInset className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-40 flex h-20 items-center justify-between px-8 bg-white/80 backdrop-blur-xl border-b border-border/40">
            <div className="flex items-center gap-6 flex-1">
              <div className="relative max-w-md w-full hidden lg:block">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Cari fitur atau data kesehatan..." 
                  className="pl-10 h-11 bg-muted/40 border-transparent rounded-xl focus-visible:bg-white focus-visible:ring-1 transition-all" 
                />
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="hidden sm:flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100/50">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-emerald-700 tracking-widest uppercase">Connected</span>
              </div>
              
              <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full bg-muted/20 hover:bg-muted/40">
                <Bell className="h-5 w-5 text-foreground/70" />
                <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-destructive border-2 border-white"></span>
              </Button>
              
              <div className="h-8 w-px bg-border/60"></div>
              
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-black leading-tight">Andi Setiawan</p>
                  <p className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">Standard User</p>
                </div>
                <Avatar className="h-11 w-11 border-2 border-primary/10 shadow-sm transition-transform hover:scale-105 cursor-pointer">
                  <AvatarImage src="https://picsum.photos/seed/andi/100/100" />
                  <AvatarFallback className="bg-primary/5 text-primary font-bold">AS</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-8 max-w-7xl mx-auto space-y-10">
            {activeTab === 'dashboard' && <EWSAlert />}
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <h2 className="text-4xl font-black tracking-tight text-foreground">
                  {activeTab === 'dashboard' ? 'Halo, Andi! 👋' : 
                   activeTab === 'analytics' ? 'Riwayat Kesehatan' :
                   activeTab === 'family' ? 'Family Dashboard' :
                   'Telekonsultasi AI'}
                </h2>
                <p className="text-muted-foreground text-lg font-medium">
                  {activeTab === 'dashboard' ? 'Ini ringkasan kondisi kesehatanmu hari ini.' : 
                   activeTab === 'analytics' ? 'Lihat perkembangan kesehatanmu secara mendalam.' :
                   activeTab === 'family' ? 'Pantau kondisi kesehatan orang-orang tersayang.' :
                   'Konsultasikan keluhan kesehatanmu dengan Dr. Piters AI.'}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="h-12 px-6 rounded-2xl border-border/60 bg-white hover:bg-muted/30 font-bold transition-all" onClick={() => setActiveTab('teleconsultation')}>
                  <Brain className="mr-2 h-4 w-4 text-primary" /> AI Health Scan
                </Button>
                <Button className="h-12 px-6 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 font-bold transition-all" onClick={() => setActiveTab('teleconsultation')}>
                  Konsultasi Dokter
                </Button>
              </div>
            </div>

            {/* Quick Stats Banner - Only on Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                {[
                  { label: "Kalori", value: "320", unit: "kcal", icon: <Zap className="h-4 w-4" />, color: "text-orange-500" },
                  { label: "Langkah", value: "4,520", unit: "steps", icon: <Activity className="h-4 w-4" />, color: "text-blue-500" },
                  { label: "Suhu", value: "36.6", unit: "°C", icon: <Battery className="h-4 w-4" />, color: "text-emerald-500" },
                  { label: "Tidur", value: "7.5", unit: "jam", icon: <Signal className="h-4 w-4" />, color: "text-purple-500" },
                ].map((stat, i) => (
                  <Card key={i} className="border-none shadow-sm bg-white overflow-hidden">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`p-2 rounded-xl bg-muted/30 ${stat.color}`}>{stat.icon}</div>
                      <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase">{stat.label}</p>
                        <p className="text-lg font-black">{stat.value} <span className="text-[10px] font-medium">{stat.unit}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 gap-10">
                <MonitoringDashboard />
                
                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8 space-y-10">
                    <HistoricalAnalytics />
                  </div>
                  <div className="lg:col-span-4">
                    <div className="sticky top-28 space-y-10">
                      <AIHealthCoach />
                      
                      {/* Personal Goals Card */}
                      <Card className="border-none shadow-xl shadow-black/5 bg-white p-8 space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-extrabold">Target Minggu Ini</h3>
                          <Badge className="bg-primary/10 text-primary border-none text-[10px] font-bold">4/7 HARI</Badge>
                        </div>
                        <div className="space-y-4">
                           <div className="space-y-2">
                             <div className="flex justify-between text-xs font-bold">
                               <span>Target Langkah (10k)</span>
                               <span className="text-primary">Terlampaui</span>
                             </div>
                             <div className="h-2 bg-muted rounded-full overflow-hidden">
                               <div className="h-full bg-primary w-[100%]" />
                             </div>
                           </div>
                           <div className="space-y-2">
                             <div className="flex justify-between text-xs font-bold">
                               <span>Target Tidur (7 Jam)</span>
                               <span>85%</span>
                             </div>
                             <div className="h-2 bg-muted rounded-full overflow-hidden">
                               <div className="h-full bg-blue-500 w-[85%]" />
                             </div>
                           </div>
                        </div>
                        <Button variant="ghost" className="w-full text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                          Ubah Target Kesehatan
                        </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <HistoricalAnalytics />
              </div>
            )}

            {activeTab === 'family' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <FamilySync />
              </div>
            )}

            {activeTab === 'teleconsultation' && (
              <TeleconsultationAI />
            )}

            {/* AI Prediction Labs Card */}
            <section className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10 transition-colors group-hover:bg-primary/10" />
              <div className="p-10 flex flex-col md:flex-row items-center gap-10 border border-primary/10 rounded-3xl bg-white/50 backdrop-blur-sm shadow-xl shadow-primary/5">
                <div className="bg-white p-6 rounded-3xl shadow-2xl shadow-primary/10 transform transition-transform group-hover:scale-105 duration-500">
                  <Sparkles className="h-16 w-16 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                    <h3 className="text-3xl font-black tracking-tight text-primary">PITERS AI Prediction Engine</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold">TEKNOLOGI PREDIKTIF</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl font-medium">
                    Analisis data biometrik Anda menggunakan model pembelajaran mesin canggih. Kami dapat memprediksi risiko penyakit kardiovaskular dan diabetes hingga 5 tahun ke depan berdasarkan tren gaya hidup Anda saat ini.
                  </p>
                </div>
                <Button className="h-14 px-10 rounded-2xl bg-primary text-white hover:bg-primary/90 whitespace-nowrap font-black text-sm uppercase tracking-wider shadow-xl shadow-primary/10 transition-all active:scale-95">
                  Mulai Prediksi AI
                </Button>
              </div>
            </section>
          </main>

          <footer className="mt-auto py-16 px-8 border-t border-border/40 bg-white/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-2 text-primary">
                  <Activity className="h-6 w-6" />
                  <span className="text-xl font-black tracking-tight">PITERS Health Portal</span>
                </div>
                <p className="text-sm text-muted-foreground font-bold">Solusi Monitoring Kesehatan Digital untuk Indonesia Hebat.</p>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col gap-3">
                   <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Layanan</span>
                   <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Dukungan Medis</a>
                   <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Bantuan Teknis</a>
                </div>
                <div className="flex flex-col gap-3">
                   <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Informasi</span>
                   <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Privasi Data</a>
                   <a href="#" className="text-sm font-bold hover:text-primary transition-colors">Syarat Layanan</a>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/40 text-center">
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">© 2026 PITERS by KICAU MANIA TEAM UPN VETERAN JAWA TIMUR</p>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
