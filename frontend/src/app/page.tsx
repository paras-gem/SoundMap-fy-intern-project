"use client"; // Required for client-side region selection and interactive map simulation tracking

import React, { useState } from "react";
import { Map, Globe, Radio, Compass, Disc } from "lucide-react";
import { toast } from "sonner";

export default function SoundMapHome() {
  // Local state tracking for simulated map coordinates and region isolation telemetry
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [activeFrequency, setActiveFrequency] = useState<string | null>(null);

  // Simulated live metadata array representing regional sound wave coordinates
  const regionalNodes = [
    { id: "NG", country: "Nigeria", genre: "Afrobeats / Highlife", activeStreams: "24.5K" },
    { id: "JP", country: "Japan", genre: "City Pop / J-Pop", activeStreams: "18.2K" },
    { id: "BR", country: "Brazil", genre: "Bossa Nova / Samba", activeStreams: "12.9K" },
    { id: "GB", country: "United Kingdom", genre: "UK Drill / Garage", activeStreams: "31.1K" },
  ];

  const handleRegionSelect = (node: typeof regionalNodes[0]) => {
    setSelectedRegion(node.country);
    setActiveFrequency(node.genre);
    
    // Premium sonner notification feedback tracking audio stream handshakes
    toast.success(`Connected to Global Audio Node: ${node.country}`, {
      description: `Streaming active frequencies: ${node.genre}`,
      icon: <Radio className="text-emerald-400" size={16} />,
    });
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* 🗺️ Header Analytics / Identity Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <Globe className="text-emerald-400 animate-pulse" size={36} />
            Global Sound Map
          </h1>
          <p className="text-slate-400 mt-1 max-w-xl">
            Click target coordinate relays to intercept localized audio waveforms, track global streaming metrics, and stamp your passport.
          </p>
        </div>
        
        {/* Real-time Node Status Badge Indicator */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800/80 px-4 py-2 rounded-xl self-start md:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
            ORBITAL TELEMETRY: ACTIVE
          </span>
        </div>
      </div>

      {/* 🏙️ Main Operations Workspace Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Map Vector Viewport Node (Spans 2 columns on desktop frames) */}
        <div className="lg:col-span-2 flex flex-col justify-between h-[520px] bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-2xl group transition-all hover:border-emerald-500/20">
          
          <div className="flex justify-between items-center z-10">
            <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
              <Map size={16} className="text-emerald-400" /> Vector Viewport Canvas
            </h3>
            {selectedRegion && (
              <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase">
                Focusing: {selectedRegion}
              </span>
            )}
          </div>

          {/* Graphical Blueprint Grid Overlay Simulation representing latitude/longitude grids */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

          {/* Interactive Core Coordinate Nodes Placement Layout */}
          <div className="flex flex-wrap gap-4 items-center justify-center my-auto z-10">
            {regionalNodes.map((node) => (
              <button
                key={node.id}
                onClick={() => handleRegionSelect(node)}
                className={`p-4 rounded-xl border font-semibold flex items-center gap-3 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedRegion === node.country
                    ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-emerald-500/20"
                    : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <Compass className={selectedRegion === node.country ? "animate-spin" : "text-slate-500"} size={18} />
                <div className="text-left">
                  <p className="text-xs font-mono font-bold tracking-tight opacity-60">{node.id} FREQ</p>
                  <p className="text-sm tracking-tight font-black">{node.country}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Subheading Bottom Info Note */}
          <div className="text-center text-[11px] font-mono text-slate-500 z-10 border-t border-slate-800/40 pt-4">
            LATENCY MATRIX SYNC: SECURE // TARGET COORDINATE CHANNELS DETECTED: {regionalNodes.length}
          </div>
        </div>

        {/* 📻 Live Frequency Decoder Terminal (Spans 1 column) */}
        <div className="flex flex-col justify-between bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-2xl transition-all hover:border-emerald-500/20">
          <div>
            <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2 mb-6">
              <Radio size={16} className="text-emerald-400" /> Frequency Receiver
            </h3>

            {/* Simulated Live Audio Spectrum Monitor Component */}
            {activeFrequency ? (
              <div className="space-y-6">
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 text-center relative overflow-hidden group">
                  <Disc className="mx-auto text-emerald-400 animate-[spin_5s_linear_infinite] mb-3" size={48} />
                  <h4 className="text-xl font-black text-white tracking-tight">{selectedRegion}</h4>
                  <p className="text-sm text-emerald-400 font-mono font-medium mt-1">{activeFrequency}</p>
                </div>

                {/* Simulated Waveform Visualization Bars */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 font-bold uppercase">
                    <span>Signal Strength</span>
                    <span className="text-emerald-400">98.4%</span>
                  </div>
                  <div className="h-2 bg-slate-950 border border-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[94%] animate-pulse" />
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback Idle State Interface View */
              <div className="border border-dashed border-slate-800 rounded-xl p-12 text-center bg-slate-950/20">
                <Radio className="mx-auto text-slate-700 mb-3" size={32} />
                <h4 className="text-sm font-bold text-slate-400">Receiver Standby Mode</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[200px] mx-auto">
                  Select a regional coordinate matrix link on the viewport map to decode audio data.
                </p>
              </div>
            )}
          </div>

          {/* Quick Action Interactive Footprint Button */}
          <button
            disabled={!selectedRegion}
            onClick={() => toast.info("Passport registry operation completed successfully.")}
            className={`w-full py-3 rounded-xl font-bold text-sm transition-all shadow-md mt-6 flex items-center justify-center gap-2 ${
              selectedRegion
                ? "bg-slate-100 text-slate-950 hover:bg-white active:scale-[0.98]"
                : "bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-800/40"
            }`}
          >
            <span>Stamp Destination Passport</span>
          </button>
        </div>

      </div>
    </div>
  );
}