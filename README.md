# 関東の旬

関東地域で今が旬の野菜・果物を月別に確認できる Web サイトです。

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4

## 開発サーバー

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと、今月の旬一覧へリダイレクトされます。

## 主な構成

| パス | 役割 |
| --- | --- |
| `src/app/page.tsx` | 今月のページへリダイレクト |
| `src/app/month/[month]/page.tsx` | 月別の旬一覧 |
| `src/data/produce.ts` | 野菜・果物のサンプルデータ |
| `src/lib/season.ts` | 月・カテゴリの判定ロジック |
| `src/components/` | ヘッダー、月ナビ、カードなどの UI |

品目を増やす場合は `src/data/produce.ts` に追加してください。
