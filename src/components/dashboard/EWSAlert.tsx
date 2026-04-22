
"use client"

import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Users, CheckCircle, X } from "lucide-react";

export function EWSAlert() {
  const [activeAlert, setActiveAlert] = useState<boolean>(true);

  if (!activeAlert) return null;

  return (
    <div className="animate-in slide-in-from-top-4 duration-700 ease-out">
      <Alert variant="destructive" className="bg-destructive border-none shadow-2xl shadow-destructive/20 p-8 rounded-[2rem] overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-4">
          <button onClick={() => setActiveAlert(false)} className="text-white/40 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="bg-white/10 p-5 rounded-2xl animate-pulse ring-4 ring-white/5">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
          
          <div className="flex-1 space-y-2">
            <AlertTitle className="text-2xl font-extrabold text-white tracking-tight">Anomali Terdeteksi (EWS Alert)</AlertTitle>
            <AlertDescription className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl">
              Kami mendeteksi lonjakan detak jantung yang drastis <span className="text-white font-bold underline decoration-white/30 underline-offset-4">(142 bpm)</span> saat status aktivitas Anda sedang "Istirahat". Ini mungkin mengindikasikan episode takikardia.
            </AlertDescription>
            
            <div className="pt-6 flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                className="h-12 px-8 rounded-xl bg-white text-destructive hover:bg-white/90 font-extrabold shadow-lg shadow-black/5" 
                onClick={() => window.alert('Bantuan medis segera datang!')}
              >
                <Phone className="mr-2 h-5 w-5" /> Hubungi Medis
              </Button>
              
              <Button 
                variant="outline" 
                className="h-12 px-8 rounded-xl bg-white/20 border-white text-white hover:bg-white/30 font-extrabold transition-all" 
                onClick={() => window.alert('Keluarga telah diberi tahu!')}
              >
                <Users className="mr-2 h-5 w-5" /> Notifikasi Keluarga
              </Button>
              
              <Button 
                variant="ghost" 
                className="h-12 px-6 rounded-xl text-white/70 hover:text-white hover:bg-white/10 font-bold" 
                onClick={() => setActiveAlert(false)}
              >
                <CheckCircle className="mr-2 h-5 w-5" /> Saya Sedang Olahraga
              </Button>
            </div>
          </div>
        </div>
      </Alert>
    </div>
  );
}
