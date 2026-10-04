import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start justify-center gap-4 px-4 py-16">
      <h2 className="font-serif text-3xl">ページが見つかりません</h2>
      <p className="text-sm text-stone-600">
        指定した月またはページは存在しません。1月から12月の旬一覧をご覧ください。
      </p>
      <Link href="/" className="rounded-full bg-emerald-800 px-4 py-2 text-sm text-white">
        今月の旬を見る
      </Link>
    </div>
  );
}
