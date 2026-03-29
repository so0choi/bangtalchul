import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSideBar"
import { cookies } from "next/headers";
import { TOKEN_COOKIE } from "@/lib/definitions";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col min-h-svh bg-background">
        <header className="flex h-12 items-center gap-2 border-b border-border/50 px-4">
          <SidebarTrigger className="text-on-surface-variant" />
        </header>
        <div className="flex-1 px-6 py-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}