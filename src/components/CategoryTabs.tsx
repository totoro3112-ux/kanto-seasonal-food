import Link from "next/link";
import type { ProduceCategory } from "@/types/produce";

type CategoryTabsProps = {
  month: number;
  selected: ProduceCategory | "all";
};

const TABS: { id: ProduceCategory | "all"; label: string }[] = [
  { id: "all", label: "すべて" },
  { id: "vegetable", label: "野菜" },
  { id: "fruit", label: "果物" },
];

export function CategoryTabs({ month, selected }: CategoryTabsProps) {
  return (
    <div className="flex gap-2" role="tablist" aria-label="品目の絞り込み">
      {TABS.map((tab) => {
        const href =
          tab.id === "all"
            ? `/month/${month}`
            : `/month/${month}?category=${tab.id}`;
        const active = selected === tab.id;
        return (
          <Link
            key={tab.id}
            href={href}
            role="tab"
            aria-selected={active}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              active
                ? "border-emerald-800 bg-emerald-800 text-white"
                : "border-stone-200 bg-white text-stone-600 hover:border-emerald-300"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
