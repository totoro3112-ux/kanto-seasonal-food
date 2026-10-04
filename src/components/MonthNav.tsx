import Link from "next/link";
import { ALL_MONTHS, MONTH_LABELS } from "@/lib/season";
import type { Month } from "@/types/produce";

type MonthNavProps = {
  currentMonth: Month;
  selectedMonth: Month;
};

export function MonthNav({ currentMonth, selectedMonth }: MonthNavProps) {
  return (
    <nav aria-label="月の選択" className="overflow-x-auto">
      <ul className="flex min-w-max gap-2">
        {ALL_MONTHS.map((month) => {
          const selected = month === selectedMonth;
          return (
            <li key={month}>
              <Link
                href={`/month/${month}`}
                aria-current={selected ? "page" : undefined}
                className={`inline-flex min-w-14 flex-col items-center rounded-full px-3 py-2 text-sm transition ${
                  selected
                    ? "bg-emerald-800 text-white"
                    : "bg-white text-stone-700 hover:bg-emerald-50"
                }`}
              >
                <span>{MONTH_LABELS[month]}</span>
                {month === currentMonth ? (
                  <span className={`text-[10px] ${selected ? "text-emerald-100" : "text-emerald-700"}`}>
                    今月
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
