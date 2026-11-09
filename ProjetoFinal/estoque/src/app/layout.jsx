"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  const routesWithoutLayout = ["/login", "/cadastro"];
  const hideLayout = routesWithoutLayout.includes(pathname);
  return (
    <html lang="pt-br">
      <body className="bg-gray-100">
        {hideLayout ? (
          children
        ) : (
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col flex-1 w-full min-h-screen">
              <SidebarTrigger  />
              <div className="flex justify-center">
                {children}
              </div>
          </main>
        </SidebarProvider>
        )};
      </body>
    </html>
  )
}
