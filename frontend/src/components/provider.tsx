"use client";

import React from "react";
import { Toaster } from "sonner";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <>
      {/* We pass children through a native React Fragment. 
        This completely removes next-themes, eliminating the property error 
        while preserving your core component layout pipeline.
      */}
      {children}
      
      {/* Framework-free native stylized alert toaster */}
      <Toaster 
        theme="dark" 
        position="top-right"
        toastOptions={{
          style: {
            background: "#090d16",
            color: "#f8fafc",
            border: "1px solid #1e293b"
          }
        }}
      />
    </>
  );
}