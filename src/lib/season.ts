import type { Month, Produce, ProduceCategory } from "@/types/produce";

export const MONTH_LABELS: Record<Month, string> = {
  1: "1月",
  2: "2月",
  3: "3月",
  4: "4月",
  5: "5月",
  6: "6月",
  7: "7月",
  8: "8月",
  9: "9月",
  10: "10月",
  11: "11月",
  12: "12月",
};

export const ALL_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export function isMonth(value: number): value is Month {
  return Number.isInteger(value) && value >= 1 && value <= 12;
}

export function parseMonthParam(value: string): Month | null {
  const month = Number(value);
  return isMonth(month) ? month : null;
}

export function getCurrentMonth(now = new Date()): Month {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
  }).formatToParts(now);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  return isMonth(month) ? month : 1;
}

export function filterProduce(
  items: Produce[],
  month: Month,
  category: ProduceCategory | "all" = "all",
): Produce[] {
  return items.filter((item) => {
    const inSeason = item.availableMonths.includes(month);
    const matchesCategory = category === "all" || item.category === category;
    return inSeason && matchesCategory;
  });
}

export function isPeakMonth(item: Produce, month: Month): boolean {
  return item.peakMonths.includes(month);
}

export function parseCategoryParam(
  value: string | string[] | undefined,
): ProduceCategory | "all" {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === "vegetable" || raw === "fruit") {
    return raw;
  }
  return "all";
}
