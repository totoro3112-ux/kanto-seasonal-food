import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start justify-center gap-4 px-4 py-16">
      <h2 className="font-serif text-3xl">ページが見つかりません</h2>
      <p className="text-sm text-stone-600">
        指定したページは存在しません。旬の食材一覧へお戻りください。
      </p>
      <Link
        href="/"
        className="rounded-full bg-emerald-700 px-4 py-2 text-sm text-white"
      >
        関東の旬食材ナビへ
      </Link>
    </div>
  );
}
