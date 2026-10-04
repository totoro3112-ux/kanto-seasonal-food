import { notFound } from "next/navigation";
import { SeasonalView } from "@/components/SeasonalView";
import { ALL_MONTHS, MONTH_LABELS, parseCategoryParam, parseMonthParam } from "@/lib/season";

export function generateStaticParams() {
  return ALL_MONTHS.map((month) => ({ month: String(month) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/month/[month]">) {
  const { month: monthParam } = await params;
  const month = parseMonthParam(monthParam);

  if (!month) {
    return { title: "月が見つかりません" };
  }

  return {
    title: `${MONTH_LABELS[month]}の旬`,
    description: `関東で${MONTH_LABELS[month]}に旬を迎える野菜と果物の一覧です。`,
  };
}

export default async function MonthPage({
  params,
  searchParams,
}: PageProps<"/month/[month]">) {
  const { month: monthParam } = await params;
  const month = parseMonthParam(monthParam);

  if (!month) {
    notFound();
  }

  const query = await searchParams;
  const category = parseCategoryParam(query.category);

  return <SeasonalView month={month} category={category} />;
}
