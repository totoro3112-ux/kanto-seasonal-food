"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  filterFoods,
  getCurrentMonth,
  type Food,
  type FoodCategory,
} from "@/data/foods";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

const CATEGORY_TABS: { id: FoodCategory | "all"; label: string }[] = [
  { id: "all", label: "すべて" },
  { id: "vegetable", label: "野菜" },
  { id: "fruit", label: "果物" },
];

export default function HomePage() {
  const [month, setMonth] = useState(getCurrentMonth);
  const [category, setCategory] = useState<FoodCategory | "all">("all");

  const items = useMemo(
    () => filterFoods(month, category),
    [month, category],
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6">
      <header className="space-y-3">
        <p className="text-sm font-medium tracking-wide text-orange-600">
          Kanto Seasonal Guide
        </p>
        <h1 className="font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
          関東の旬食材ナビ 🥦🍎
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-stone-600">
          千葉・茨城・群馬・埼玉・栃木・神奈川・東京で、今がおいしい野菜と果物を探せます。
        </p>
      </header>

      <section className="space-y-4" aria-label="絞り込み">
        <div>
          <p className="mb-2 text-xs font-medium text-stone-500">月で探す</p>
          <div className="flex flex-wrap gap-2">
            {MONTHS.map((value) => {
              const selected = value === month;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMonth(value)}
                  aria-pressed={selected}
                  className={`min-w-14 rounded-full px-3 py-2 text-sm font-medium transition ${
                    selected
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-emerald-50"
                  }`}
                >
                  {value}月
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-stone-500">種類</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_TABS.map((tab) => {
              const selected = tab.id === category;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  aria-pressed={selected}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selected
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-orange-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <p className="text-sm text-stone-500">
        {month}月の旬 {items.length}件
      </p>

      {items.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-orange-200 bg-white/80 p-10 text-center text-stone-500">
          この条件に合う旬の食材はまだありません。月または種類を変えてみてください。
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}

function FoodThumb({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="relative block h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-orange-50">
      {failed ? null : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="56px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

function FoodCard({ food }: { food: Food }) {
  const isVegetable = food.category === "vegetable";

  return (
    <article className="flex flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm shadow-orange-950/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <FoodThumb src={food.image} alt={food.name} />
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isVegetable
              ? "bg-emerald-50 text-emerald-800"
              : "bg-orange-50 text-orange-800"
          }`}
        >
          {isVegetable ? "野菜" : "果物"}
        </span>
      </div>
      <h2 className="mt-4 font-serif text-2xl text-stone-900">{food.name}</h2>
      <p className="mt-2 text-xs font-medium text-emerald-800">
        主な産地：{food.prefectures.join("・")}
      </p>
      <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
        {food.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {food.months.map((value) => (
          <span
            key={value}
            className="rounded-full bg-orange-50 px-2 py-0.5 text-[11px] text-orange-800"
          >
            {value}月
          </span>
        ))}
      </div>
    </article>
  );
}
