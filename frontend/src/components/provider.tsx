"use client"; // Required because Next Themes and Sonner rely on React context hooks

import * as React from "react"; 
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Toaster } from "sonner";    

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        // Next Themes requires attributes to be declared directly inside the opening tag wrapper
        <NextThemeProvider
            attribute="class"           // Injects 'class="dark"' or 'class="light"' into the <html> element
            defaultTheme="system"       // Automatically falls back to user's OS preference initially
            enableSystem={true}         // Explicitly syncs visual rendering with local device settings
            disableTransitionOnChange   // Prevents distracting animation flashes during immediate theme flips
        >
            {/* Master Application Views Canvas */}
            {children}

            {/* Premium global async micro-interaction notification hub */}
            <Toaster 
                position="top-right"    // Fixed overlay anchoring coordinates
                richColors={true}       // Forces high-contrast color palettes for success/error alerts
                closeButton={true}      // Appends an explicit closing node interaction button to the toast
                theme="dark"            // Keeps toasts consistently sleek regardless of app theme
            />
        </NextThemeProvider>   
    );   
}