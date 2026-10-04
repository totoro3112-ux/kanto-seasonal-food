import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const sans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const serif = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "関東の旬 | 野菜・果物カレンダー",
    template: "%s | 関東の旬",
  },
  description:
    "関東地域で今が旬の野菜と果物を、月別に確認できるカレンダーです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-stone-200 bg-white/70">
          <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-stone-500 sm:px-6">
            旬は産地や天候で前後します。店頭の表示もあわせてご確認ください。
          </p>
        </footer>
      </body>
    </html>
  );
}
