"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Stethoscope, Bot, Phone, Video, MessageCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TeleconsultationAI() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Halo Andi! Saya Dr. Piters AI. Ada yang bisa saya bantu terkait kondisi kesehatan Anda hari ini?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulasi respons AI
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Terima kasih atas informasinya. Berdasarkan data detak jantung Anda yang stabil di 74 bpm, Anda tampaknya dalam kondisi baik. Apakah Anda merasakan gejala pusing atau sesak napas?' 
      }]);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="lg:col-span-8 space-y-6">
        <Card className="border-none shadow-2xl shadow-black/5 bg-white flex flex-col h-[650px] rounded-[2rem] overflow-hidden">
          <CardHeader className="border-b border-border/40 p-8 flex flex-row items-center justify-between bg-muted/20">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-black">Dr. Piters AI</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">AI Specialist Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl bg-white border-border/40"><Video className="h-5 w-5" /></Button>
              <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl bg-white border-border/40"><Phone className="h-5 w-5" /></Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden bg-[#FBFDFF]">
            <ScrollArea className="flex-1 p-8">
              <div className="space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-3xl shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-white text-foreground rounded-tl-none border border-border/40'
                    }`}>
                      <p className="text-sm font-semibold leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-8 border-t border-border/40 bg-white">
              <div className="flex gap-4">
                <Input 
                  placeholder="Ceritakan keluhan kesehatan Anda..." 
                  className="h-14 rounded-2xl bg-muted/40 border-transparent focus-visible:bg-white transition-all font-medium px-6"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button className="h-14 w-14 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-95" onClick={handleSend}>
                  <Send className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-[10px] text-center text-muted-foreground mt-4 font-black uppercase tracking-widest">
                AI PITERS: AI ADVICE IS NOT A SUBSTITUTE FOR HUMAN MEDICAL DIAGNOSIS.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-4 space-y-10">
        <Card className="border-none shadow-xl shadow-black/5 bg-white p-8 rounded-[2rem]">
          <h3 className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-6">Dokter Spesialis Tersedia</h3>
          <div className="space-y-6">
            {[
              { name: "Evrick Demarschan", spec: "Kardiologi", img: "https://picsum.photos/seed/doc1/100/100", status: "Online" },
              { name: "dr. Budi Santoso", spec: "Penyakit Dalam", img: "https://picsum.photos/seed/doc2/100/100", status: "Sibuk" },
              { name: "dr. Larasati", spec: "Gizi Klinik", img: "https://picsum.photos/seed/doc3/100/100", status: "Online" },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/30 transition-all cursor-pointer border border-transparent hover:border-border/40 group">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                      <AvatarImage src={doc.img} />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">{doc.name[3]}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white ${doc.status === 'Online' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  </div>
                  <div>
                    <p className="text-sm font-black group-hover:text-primary transition-colors">{doc.name}</p>
                    <p className="text-[10px] text-muted-foreground font-bold tracking-tight">{doc.spec}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                   <MessageCircle className="h-4 w-4 text-primary" />
                </Button>
              </div>
            ))}
          </div>
          <Button className="w-full mt-8 h-12 rounded-2xl bg-muted/40 hover:bg-muted/60 text-foreground font-black text-[10px] uppercase tracking-widest border-none">Lihat Semua Dokter</Button>
        </Card>

        <Card className="border-none shadow-2xl shadow-primary/10 bg-gradient-to-br from-primary to-blue-700 text-white p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
            <Stethoscope className="h-40 w-40" />
          </div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-2xl tracking-tight">PITERS Priority</h4>
              <p className="text-sm text-white/80 font-medium leading-relaxed">Dapatkan akses instan ke dokter spesialis 24/7 dan resep obat prioritas.</p>
            </div>
            <Button className="w-full bg-white text-primary hover:bg-emerald-50 font-black h-14 rounded-2xl transition-all shadow-xl shadow-black/10 active:scale-95 text-xs uppercase tracking-widest">
              Upgrade ke Priority
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
