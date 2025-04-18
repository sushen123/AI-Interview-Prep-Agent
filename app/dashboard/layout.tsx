"use client"
import { UserButton } from "@clerk/nextjs"

import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster"


function DashboardLayout({children}: any)  {

    return (
     
        <div className="h-screen w-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >  
           <Toaster />

       {children}
     
       </ThemeProvider> 
        </div>
         
    )
}

export default DashboardLayout
