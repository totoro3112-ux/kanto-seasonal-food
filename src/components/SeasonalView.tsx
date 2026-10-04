import { CategoryTabs } from "@/components/CategoryTabs";
import { MonthNav } from "@/components/MonthNav";
import { ProduceGrid } from "@/components/ProduceGrid";
import { produceItems } from "@/data/produce";
import { filterProduce, getCurrentMonth, MONTH_LABELS } from "@/lib/season";
import type { Month, ProduceCategory } from "@/types/produce";

type SeasonalViewProps = {
  month: Month;
  category: ProduceCategory | "all";
};

export function SeasonalView({ month, category }: SeasonalViewProps) {
  const currentMonth = getCurrentMonth();
  const items = filterProduce(produceItems, month, category);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6">
      <section className="space-y-3">
        <p className="text-sm text-emerald-800">関東の旬カレンダー</p>
        <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
          {MONTH_LABELS[month]}がおいしい野菜・果物
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-stone-600">
          茨城・栃木・群馬・埼玉・千葉・東京・神奈川を中心に、店頭で出回りやすい旬をまとめています。
        </p>
      </section>
      <MonthNav currentMonth={currentMonth} selectedMonth={month} />
      <CategoryTabs month={month} selected={category} />
      <ProduceGrid items={items} month={month} />
    </div>
  );
}
