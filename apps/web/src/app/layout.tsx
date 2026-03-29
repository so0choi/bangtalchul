import "./globals.css";
import type { ReactNode } from "react";
import Navigation from "@/src/components/layout/Navigation";
import {cookies} from 'next/headers';
import { TOKEN_COOKIE } from "@/src/lib/definitions";

export const metadata = {
  title: "냉부 | 냉장고를 부탁해",
  description: "냉장고 속 식재료로 유통기한 관리와 맞춤 레시피를 한번에.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookiesStore = await cookies()
  const token = cookiesStore.get(TOKEN_COOKIE)
  const isLoggedIn = !!token;

  return (
    <html lang="ko">
      <body className="bg-stone-50 text-slate-900 antialiased">
        <div className="min-h-screen">
          <Navigation isLoggedIn={isLoggedIn}/>
          {children}
        </div>
      </body>
    </html>
  );
}
