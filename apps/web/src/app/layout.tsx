import "./globals.css";
import type { ReactNode } from "react";
import { Inter, Nanum_Gothic, Geist } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import { cookies } from 'next/headers';
import { TOKEN_COOKIE } from "@/lib/definitions";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  variable: "--font-nanumgothic",
  display: "swap",
  weight: ["400", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "잇미 | EAT ME",
  description: "냉장고 속 식재료로 유통기한 관리와 맞춤 레시피를 한번에.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get(TOKEN_COOKIE);
  const isLoggedIn = !!token;

  return (
    <html lang="ko" className={cn(nanumGothic.variable, inter.variable, "font-sans", geist.variable)}>
      <body className="bg-surface font-body text-on-surface antialiased">
        <div className="min-h-screen">
          <Navigation isLoggedIn={isLoggedIn} />
          {children}
        </div>
      </body>
    </html>
  );
}
