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
        <div className="flex-1 px-6 py-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}