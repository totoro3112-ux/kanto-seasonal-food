import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group">
          <p className="text-xs tracking-[0.2em] text-emerald-800">KANTO SHUN</p>
          <h1 className="font-serif text-xl text-stone-900 group-hover:text-emerald-800 sm:text-2xl">
            関東の旬
          </h1>
        </Link>
        <p className="hidden max-w-xs text-right text-sm text-stone-500 sm:block">
          関東7都県で今がおいしい野菜と果物
        </p>
      </div>
    </header>
  );
}
