import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ChatProvider } from "@/hooks/useChat";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Ace Your Interview",
  description: "Ace your interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <ChatProvider>
    <html lang="en">
      <body className={` scroll-smooth`}>    
        <Toaster /> 
        {children} 
        </body>
    </html>
    </ChatProvider>
    </SessionProvider>
  
  );
}