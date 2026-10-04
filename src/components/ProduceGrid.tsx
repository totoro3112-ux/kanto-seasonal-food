import { ProduceCard } from "@/components/ProduceCard";
import type { Month, Produce } from "@/types/produce";

type ProduceGridProps = {
  items: Produce[];
  month: Month;
};

export function ProduceGrid({ items, month }: ProduceGridProps) {
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-500">
        この条件に合う旬の品目はまだ登録されていません。
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProduceCard key={item.id} item={item} month={month} />
      ))}
    </div>
  );
}
