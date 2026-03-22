import "./globals.css";
import type { ReactNode } from "react";
import Navigation from "@/src/components/layout/Navigation";

export const metadata = {
  title: "Bangtalchul | 방탈출 리뷰 큐레이션",
  description: "방탈출러를 위한 리뷰, 랭킹, 큐레이션 플랫폼",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-slate-950 text-white antialiased">
        <div className="min-h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
