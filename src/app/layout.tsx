import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
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
  title: "関東の旬食材ナビ 🥦🍎",
  description:
    "関東7都県で今が旬の野菜と果物を、月と種類から探せる案内アプリです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-orange-100 bg-white/70">
          <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-stone-500 sm:px-6">
            旬は産地や天候で前後します。店頭の表示もあわせてご確認ください。
          </p>
        </footer>
      </body>
    </html>
  );
}
