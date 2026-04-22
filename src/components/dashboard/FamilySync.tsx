
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserCheck, UserX, Clock, Heart, ShieldCheck, Activity, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const familyMembers = [
  { 
    id: 1, 
    name: "Bapak Hadi", 
    relation: "Ayah", 
    status: "Aktif", 
    bpm: 72, 
    lastSync: "2 mnt lalu", 
    image: "https://picsum.photos/seed/hadi/100/100",
    wearing: true,
    condition: "Normal"
  },
  { 
    id: 2, 
    name: "Ibu Siti", 
    relation: "Ibu", 
    status: "Istirahat", 
    bpm: 68, 
    lastSync: "10 mnt lalu", 
    image: "https://picsum.photos/seed/siti/100/100",
    wearing: true,
    condition: "Normal"
  },
  { 
    id: 3, 
    name: "Eyang Wira", 
    relation: "Kakek", 
    status: "Offline", 
    bpm: "--", 
    lastSync: "2 jam lalu", 
    image: "https://picsum.photos/seed/wira/100/100",
    wearing: false,
    condition: "Unknown"
  },
];

export function FamilySync() {
  return (
    <div className="space-y-10">
      <Card className="border-none shadow-xl shadow-primary/5 bg-white">
        <CardHeader className="border-b border-border/40 p-8">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-extrabold tracking-tight">Family Sync Dashboard</CardTitle>
              <CardDescription className="text-sm font-medium">Pantau kesehatan keluarga tercinta dari jarak jauh</CardDescription>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="h-9 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border-border/60">
                <ShieldCheck className="mr-2 h-4 w-4 text-primary" /> Terverifikasi
              </Button>
              <Button className="h-9 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary">Tambah Anggota</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border/40">
            {familyMembers.map((member) => (
              <div key={member.id} className="p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-muted/10 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Avatar className="h-16 w-16 border-4 border-white shadow-lg shadow-black/5 ring-1 ring-border/20">
                      <AvatarImage src={member.image} />
                      <AvatarFallback className="bg-primary/5 text-primary font-bold text-lg">{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute bottom-0 right-0 h-5 w-5 rounded-full border-4 border-white ${member.wearing ? 'bg-emerald-500' : 'bg-gray-300'} shadow-sm`}></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{member.name}</h4>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{member.relation}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-[10px] font-medium text-muted-foreground">Sinkronisasi: {member.lastSync}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-10">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest">Aktivitas</p>
                    <Badge variant={member.status === 'Offline' ? 'secondary' : 'default'} className={member.status === 'Offline' ? 'bg-muted/50' : 'bg-emerald-100 text-emerald-700'}>
                      <Activity className="mr-1.5 h-3 w-3" /> {member.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest">Detak Jantung</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-black ${member.status === 'Offline' ? 'text-muted-foreground' : 'text-foreground'}`}>{member.bpm}</span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">BPM</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest">Kondisi</p>
                    <div className="flex items-center gap-1.5">
                      {member.condition === 'Normal' ? (
                        <Badge className="bg-emerald-50 text-emerald-600 border-none">SEHAT</Badge>
                      ) : member.condition === 'Unknown' ? (
                        <Badge variant="outline" className="text-muted-foreground border-border">OFFLINE</Badge>
                      ) : (
                        <Badge className="bg-rose-50 text-rose-600 border-none">PERHATIAN</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-border/60 hover:bg-primary/5 hover:text-primary transition-all">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="h-10 px-5 rounded-xl text-xs font-bold tracking-tight border-border/60">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-none shadow-lg bg-emerald-600 text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
             <ShieldCheck className="h-24 w-24" />
           </div>
           <CardHeader className="p-8">
             <CardTitle className="text-xl font-extrabold tracking-tight">EWS Family Guard</CardTitle>
             <CardDescription className="text-white/70 font-medium">Sistem peringatan dini otomatis untuk seluruh keluarga.</CardDescription>
           </CardHeader>
           <CardContent className="px-8 pb-8 space-y-4">
             <p className="text-sm font-medium text-emerald-50">Dapatkan notifikasi instan jika salah satu anggota keluarga mengalami anomali kesehatan yang terdeteksi oleh PITERS.</p>
             <Button className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-bold h-11 rounded-xl transition-all">
               Konfigurasi Peringatan
             </Button>
           </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-primary text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
             <AlertCircle className="h-24 w-24" />
           </div>
           <CardHeader className="p-8">
             <CardTitle className="text-xl font-extrabold tracking-tight">Kontak Darurat</CardTitle>
             <CardDescription className="text-white/70 font-medium">Kelola siapa yang harus dihubungi dalam situasi kritis.</CardDescription>
           </CardHeader>
           <CardContent className="px-8 pb-8 space-y-4">
             <p className="text-sm font-medium text-primary-foreground/80">Pastikan nomor telepon medis dan keluarga terdekat sudah terdaftar untuk respons cepat.</p>
             <Button className="w-full bg-white text-primary hover:bg-primary/5 font-bold h-11 rounded-xl transition-all">
               Kelola Kontak
             </Button>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
