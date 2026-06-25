"use client";

import { useEffect, useState } from 'react';
import {Globe, Heart, Compass, Radio, Settings, User} from 'lucide-react'
import {usePathname} from 'next/navigation';    
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import './sidebar.css';    

export default function Sidebar () {
    const pathname = usePathname();

    // state tracking for desktop displays are working
    
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);    

    useEffect(() => {

        // standard web API tracking for window resizing
    
        const mediaMatcher = window.matchMedia("(min-width: 1024px)");

        // set initial state based on browser size

        setIsDesktop(mediaMatcher.matches); 

        // Update state when browser is resized

        const handleResize = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        // add and remove listener

        mediaMatcher.addEventListener('change', handleResize);

        return () => mediaMatcher.removeEventListener('change', handleResize);

        // end of effect

    }, []); 
    
    // structural navbar target array matrix

    const navItems = [
    { label: "Audio Radar Map", href: "/", icon: Globe },
    { label: "Saved Waves", href: "/favorites", icon: Heart },
    { label: "Passport Ledger", href: "/passport", icon: Compass },
  ];

  // render structure for Desktop vs Mobile

  if (isDesktop) {
    return null;

    return (

        /* 🪐 NATIVE HTML5 SEMANTIC ASIDE CONTAINER (Completely free of Tailwind classNames) */
    <aside 
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 20,
        width: "256px",
        backgroundColor: "#030712", // Premium Dark deep carbon base graphite color
        borderRight: "1px solid #1e293b", // Tactical crisp outline divider border layout line
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* UPPER AREA COMPONENT STACK */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* Core System Brand Header Identity Module */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 8px" }}>
          <div style={{
            padding: "8px",
            backgroundColor: "rgba(16, 185, 129, 0.1)", // Radioactive accent backdrop tint
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Using native style object for the Lucide icon instead of a class */}
            <Radio style={{ color: "#10b981" }} size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: "14px", fontWeight: 900, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
              SoundMap
            </h2>
            <p style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "#64748b", letterSpacing: "0.1em", marginTop: "2px", marginBottom: 0 }}>
              v2.0.26 Core
            </p>
          </div>
        </div>

        {/* Navigation Interactive Action Node Block Menu */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  border: "1px solid transparent",
                  /* Pure Native JavaScript conditional style execution pipelines */
                  backgroundColor: isActive ? "#090d16" : "transparent",
                  borderColor: isActive ? "rgba(16, 185, 129, 0.2)" : "transparent",
                  color: isActive ? "#10b981" : "#94a3b8",
                }}
              >
                <Icon size={18} style={{ color: isActive ? "#10b981" : "#475569" }} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* LOWER FOOTER TELEMETRY BADGE STATUS REGION */}
      <div style={{
        borderTop: "1px solid #1e293b",
        paddingTop: "16px",
        paddingLeft: "8px",
        paddingRight: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            height: "28px",
            width: "28px",
            borderRadius: "50%",
            backgroundColor: "#090d16",
            border: "1px solid #1e293b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: 900,
            color: "#94a3b8"
          }}>
            A
          </div>
          <span style={{ fontFamily: "monospace", fontSize: "10px", fontWeight: 700, color: "#64748b" }}>
            GRID::ONLINE
          </span>
        </div>
        <Settings size={16} style={{ color: "#475569", cursor: "pointer" }} />
      </div>
    </aside>
  );
}

    


}



            
       
    







