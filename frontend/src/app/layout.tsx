import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import Sidebar from "@/components/Sidebar"; 
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoundMap | Acoustic Telemetry Grid",
  description: "Explore the planet through localized sound waves and audio frequencies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={inter.className}
        style={{
          backgroundColor: "#030712", 
          color: "#f8fafc",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          minHeight: "100vh",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <Provider>
          {/* Main flexbox layout wrapper */}
          <div style={{ display: "flex", minHeight: "100vh" }}>
            
            {/* 1. MOUNT SIDEBAR HERE (This calls it globally so it sits on the left side) */}
            <Sidebar />
            
            {/* 2. MAIN DISPLAY FRAME CANVAS */}
            <main 
              style={{
                flex: 1,
                padding: "24px",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
              }}
              className="main-content-layout" // Triggers the margin shift from globals.css
            >
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}