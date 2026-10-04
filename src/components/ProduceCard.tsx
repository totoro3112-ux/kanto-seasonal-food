import { isPeakMonth } from "@/lib/season";
import type { Month, Produce } from "@/types/produce";

type ProduceCardProps = {
  item: Produce;
  month: Month;
};

export function ProduceCard({ item, month }: ProduceCardProps) {
  const peak = isPeakMonth(item, month);

  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-stone-400">{item.nameKana}</p>
          <h3 className="mt-1 font-serif text-2xl text-stone-900">{item.name}</h3>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs ${
            item.category === "vegetable"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-orange-50 text-orange-800"
          }`}
        >
          {item.category === "vegetable" ? "野菜" : "果物"}
        </span>
      </div>
      {peak ? (
        <p className="mt-3 inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs text-amber-900">
          今が食べごろ
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p>
      <p className="mt-4 text-xs text-stone-500">{item.prefectures.join("・")}</p>
    </article>
  );
}
