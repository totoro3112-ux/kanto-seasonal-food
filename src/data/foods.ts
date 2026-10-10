export type FoodCategory = "vegetable" | "fruit";

export type Food = {
  id: string;
  name: string;
  category: FoodCategory;
  months: number[];
  prefectures: string[];
  description: string;
  image: string;
};

export const KANTO_PREFECTURES = [
  "千葉",
  "茨城",
  "群馬",
  "埼玉",
  "栃木",
  "神奈川",
  "東京",
] as const;

export const foods: Food[] = [
  // --- 既存食材 (14種) ---
  {
    id: "fukaya-negi",
    name: "深谷ねぎ",
    category: "vegetable",
    months: [11, 12, 1, 2, 3],
    prefectures: ["埼玉"],
    description:
      "埼玉県深谷市の冬ねぎ。軟白栽培で甘みとやわらかさがあり、鍋やすき焼きの定番です。",
    image: "/images/fukaya-negi.png",
  },
  {
    id: "tochiotome",
    name: "とちおとめ",
    category: "fruit",
    months: [1, 2, 3, 4, 5],
    prefectures: ["栃木"],
    description:
      "栃木県を代表するいちご。果肉がしっかりして甘酸のバランスがよく、贈答用にも人気です。",
    image: "/images/tochiotome.png",
  },
  {
    id: "boshu-biwa",
    name: "房州びわ",
    category: "fruit",
    months: [5, 6],
    prefectures: ["千葉"],
    description:
      "南房総の初夏の味覚。果皮が薄く果汁が多い高級びわで、旬が短いのが特徴です。",
    image: "/images/boshu-biwa.png",
  },
  {
    id: "chiba-peanut",
    name: "千葉県産落花生",
    category: "vegetable",
    months: [9, 10, 11],
    prefectures: ["千葉"],
    description:
      "全国有数の産地・千葉の落花生。秋の茹で落花生は、香ばしさとほくほく感が楽しめます。",
    image: "/images/chiba-peanut.png",
  },
  {
    id: "komatsuna",
    name: "小松菜",
    category: "vegetable",
    months: [10, 11, 12, 1, 2, 3],
    prefectures: ["東京", "埼玉", "神奈川"],
    description:
      "江戸川区小松川が名前の由来。冬に甘みが増す、関東の代表的な葉物野菜です。",
    image: "/images/komatsuna.png",
  },
  {
    id: "hokota-melon",
    name: "鉾田メロン",
    category: "fruit",
    months: [5, 6, 7],
    prefectures: ["茨城"],
    description:
      "メロン産地として知られる茨城県鉾田市。初夏に甘みの乗った果実が出回ります。",
    image: "/images/hokota-melon.png",
  },
  {
    id: "shimonita-negi",
    name: "下仁田ねぎ",
    category: "vegetable",
    months: [11, 12, 1],
    prefectures: ["群馬"],
    description:
      "群馬県下仁田町の太いねぎ。加熱するととろける甘さになり、ねぎ鍋に最適です。",
    image: "/images/shimonita-negi.png",
  },
  {
    id: "miura-daikon",
    name: "三浦大根",
    category: "vegetable",
    months: [12, 1, 2, 3],
    prefectures: ["神奈川"],
    description:
      "三浦半島の冬大根。大きくて水分が多く、おでんやぶり大根に向きます。",
    image: "/images/miura-daikon.png",
  },
  {
    id: "kasumigaura-renkon",
    name: "霞ヶ浦れんこん",
    category: "vegetable",
    months: [10, 11, 12, 1, 2],
    prefectures: ["茨城"],
    description:
      "霞ヶ浦周辺が主産地。穴が小さく肉厚で、煮物でも形が崩れにくいれんこんです。",
    image: "/images/kasumigaura-renkon.png",
  },
  {
    id: "tomisato-suika",
    name: "富里すいか",
    category: "fruit",
    months: [5, 6, 7],
    prefectures: ["千葉"],
    description:
      "千葉県富里市の初夏すいか。大玉でシャリ感があり、夏の訪れを感じさせます。",
    image: "/images/tomisato-suika.png",
  },
  {
    id: "gunma-cabbage",
    name: "群馬の春キャベツ",
    category: "vegetable",
    months: [3, 4, 5, 6],
    prefectures: ["群馬"],
    description:
      "高原野菜の産地・群馬の春キャベツ。葉がやわらかく、生食や浅漬けに向きます。",
    image: "/images/gunma-cabbage.png",
  },
  {
    id: "kanto-nashi",
    name: "幸水・豊水梨",
    category: "fruit",
    months: [8, 9, 10],
    prefectures: ["千葉", "茨城", "栃木"],
    description:
      "関東の梨産地が支える秋の味覚。果汁が多く、冷やしてそのまま食べるのが一番です。",
    image: "/images/kanto-nashi.png",
  },
  {
    id: "ibaraki-sweet-potato",
    name: "茨城のさつまいも",
    category: "vegetable",
    months: [9, 10, 11, 12],
    prefectures: ["茨城", "千葉"],
    description:
      "貯蔵して甘みを引き出した秋冬の芋。焼き芋や干しいもでも親しまれます。",
    image: "/images/ibaraki-sweet-potato.png",
  },
  {
    id: "shonan-gold",
    name: "湘南ゴールド",
    category: "fruit",
    months: [3, 4, 5],
    prefectures: ["神奈川"],
    description:
      "神奈川生まれの柑橘。爽やかな香りとほろ苦さが特徴で、春先に出回ります。",
    image: "/images/shonan-gold.png",
  },

  // --- 新規追加食材 (20種) ---
  {
    id: "yayoi-hime",
    name: "やよいひめ",
    category: "fruit",
    months: [12, 1, 2, 3, 4, 5],
    prefectures: ["群馬"],
    description:
      "群馬県生まれの大粒いちご。上品な甘みと適度な酸味があり、春先（3月＝弥生）以降も味が落ちにくいのが魅力です。",
    image: "/images/yayoi-hime.png",
  },
  {
    id: "tsumagoi-cabbage",
    name: "嬬恋高原キャベツ",
    category: "vegetable",
    months: [7, 8, 9, 10],
    prefectures: ["群馬"],
    description:
      "標高1,000mを超える高冷地で育つ夏秋キャベツ。昼夜の温差により甘みが強く、みずみずしいシャキシャキ感が楽しめます。",
    image: "/images/tsumagoi-cabbage.png",
  },
  {
    id: "saitama-broccoli",
    name: "埼玉のブロッコリー",
    category: "vegetable",
    months: [11, 12, 1, 2, 3, 4, 5],
    prefectures: ["埼玉"],
    description:
      "深谷・本庄など県北を中心に全国トップクラスの産出額を誇ります。冬場は花蕾が引き締まり特に甘みが増します。",
    image: "/images/saitama-broccoli.png",
  },
  {
    id: "tokyo-udo",
    name: "東京うど",
    category: "vegetable",
    months: [1, 2, 3, 4],
    prefectures: ["東京"],
    description:
      "立川市などで地下室（ムロ）を使って太陽光を遮り育てる高級江戸東京野菜。真っ白で柔らかく、シャキッとした歯ごたえと爽やかな香味が特徴です。",
    image: "/images/tokyo-udo.png",
  },
  {
    id: "ibaraki-chestnut",
    name: "茨城の栗",
    category: "fruit",
    months: [9, 10],
    prefectures: ["茨城"],
    description:
      "栽培面積・生産量ともに日本一を誇る茨城の栗。ほくほくとした風味で栗ご飯や和菓子・洋菓子に広く親しまれています。",
    image: "/images/ibaraki-chestnut.png",
  },
  {
    id: "ibaraki-hakusai",
    name: "茨城の冬白菜",
    category: "vegetable",
    months: [11, 12, 1, 2],
    prefectures: ["茨城"],
    description:
      "八千代町や坂東市などを中心とした全国屈指の白菜王国。霜に当たることで葉がやわらかく甘みが増し、鍋料理に欠かせません。",
    image: "/images/ibaraki-hakusai.png",
  },
  {
    id: "chosei-tomato",
    name: "ながいきトマト",
    category: "vegetable",
    months: [2, 3, 4, 5, 6],
    prefectures: ["千葉"],
    description:
      "千葉県長生（ちょうせい）地域のブランドトマト。しっかりとした赤色と甘み、酸味のバランスに優れ、春先に出荷のピークを迎えます。",
    image: "/images/chosei-tomato.png",
  },
  {
    id: "chiba-cucumber",
    name: "千葉のきゅうり",
    category: "vegetable",
    months: [3, 4, 5, 6, 10, 11],
    prefectures: ["千葉"],
    description:
      "旭市などを中心に施設栽培が盛んで関東の食卓を支えます。歯切れが良く、瑞々しさが際立つ初春〜初夏の特産品です。",
    image: "/images/chiba-cucumber.png",
  },
  {
    id: "odawara-mikan",
    name: "小田原みかん",
    category: "fruit",
    months: [10, 11, 12, 1],
    prefectures: ["神奈川"],
    description:
      "相模湾からの温暖な潮風と日当たりに恵まれた小田原・湯河原の温州みかん。甘味と爽やかな酸味が心地よい秋冬の味覚です。",
    image: "/images/odawara-mikan.png",
  },
  {
    id: "kamakura-yasai",
    name: "鎌倉野菜（ラディッシュ・彩り根菜）",
    category: "vegetable",
    months: [4, 5, 6, 10, 11, 12],
    prefectures: ["神奈川"],
    description:
      "鎌倉近郊の農家が多品種栽培する直売野菜。鮮やかなカラフル人参やラディッシュ、カブなど、都内のレストランでも人気を博しています。",
    image: "/images/kamakura-yasai.png",
  },
  {
    id: "tochigi-nira",
    name: "栃木のニラ",
    category: "vegetable",
    months: [1, 2, 3, 4, 11, 12],
    prefectures: ["栃木"],
    description:
      "全国トップクラスの出荷量を誇る栃木のニラ。一番つみの冬ニラは肉厚でやわらかく、強い香りと甘みがあります。",
    image: "/images/tochigi-nira.png",
  },
  {
    id: "sayama-cha",
    name: "狭山新茶",
    category: "vegetable",
    months: [5, 6],
    prefectures: ["埼玉"],
    description:
      "「色は静岡、香りは宇治よ、味は狭山でとどめさす」と歌われる銘茶。寒冷な冬を越すため葉が厚くなり、濃い味わいと深いコクが楽しめます。",
    image: "/images/sayama-cha.png",
  },
  {
    id: "edamame-gunma",
    name: "群馬の枝豆",
    category: "vegetable",
    months: [6, 7, 8, 9],
    prefectures: ["群馬"],
    description:
      "赤城山麓や沼田エリアなどで栽培される夏のビールのお供。鮮度を保つため早朝に収穫され、風味豊かで甘みの強いのが特徴です。",
    image: "/images/edamame-gunma.png",
  },
  {
    id: "tama-grape",
    name: "多摩のぶどう（シャインマスカット・ピオーネ）",
    category: "fruit",
    months: [8, 9],
    prefectures: ["東京"],
    description:
      "八王子や世田谷、三鷹などで観光農園を中心に栽培される都産ぶどう。大粒で高糖度なシャインマスカットやピオーネが人気を集めます。",
    image: "/images/tama-grape.png",
  },
  {
    id: "adachi-spinach",
    name: "足立のほうれん草",
    category: "vegetable",
    months: [11, 12, 1, 2, 3],
    prefectures: ["東京"],
    description:
      "東京・足立区や葛飾区の都市近郊農業で育てられるほうれん草。出荷までの時間が短いため抜群の鮮度で都内市場へ届きます。",
    image: "/images/adachi-spinach.png",
  },
  {
    id: "ashigara-cha",
    name: "足柄新茶",
    category: "vegetable",
    months: [5, 6],
    prefectures: ["神奈川"],
    description:
      "丹沢・箱根山麓の恵まれた気候と清流で育つ神奈川の銘茶。気品ある甘みと爽やかな香りが初夏の訪れを告げます。",
    image: "/images/ashigara-cha.png",
  },
  {
    id: "boshu-mikan",
    name: "房州極早生みかん",
    category: "fruit",
    months: [10, 11],
    prefectures: ["千葉"],
    description:
      "南房総の温暖な気候を生かして秋口から収穫される早生みかん。皮が薄く果汁たっぷりで、甘酸っぱさが喉を潤します。",
    image: "/images/boshu-mikan.png",
  },
  {
    id: "miya-negi",
    name: "宮ねぎ",
    category: "vegetable",
    months: [12, 1, 2],
    prefectures: ["栃木"],
    description:
      "栃木市で作られるずんぐりとした伝統ねぎ。ずんぐりと太く根元が曲がっており、強い甘みとトロッとした食感が加熱料理で引き立ちます。",
    image: "/images/miya-negi.png",
  },
  {
    id: "koshigaya-negi",
    name: "越谷ねぎ",
    category: "vegetable",
    months: [12, 1, 2, 3],
    prefectures: ["埼玉"],
    description:
      "埼玉・越谷で作られる伝統の千住系長ねぎ。身が引き締まっていて煮崩れしにくく、料亭や和食店でも珍重される極上品です。",
    image: "/images/koshigaya-negi.png",
  },
  {
    id: "ibaraki-fig",
    name: "茨城のいちじく",
    category: "fruit",
    months: [8, 9, 10],
    prefectures: ["茨城"],
    description:
      "かすみがうら市などで栽培される秋のフルーツ。完熟した甘い果肉はそのまま食べるほか、ジャムやコンポートにしても美味です。",
    image: "/images/ibaraki-fig.png",
  },
];

export function getCurrentMonth(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
  }).formatToParts(now);
  return Number(parts.find((part) => part.type === "month")?.value ?? 1);
}

export function filterFoods(
  month: number,
  category: FoodCategory | "all",
): Food[] {
  return foods.filter((food) => {
    const inSeason = food.months.includes(month);
    const matchesCategory = category === "all" || food.category === category;
    return inSeason && matchesCategory;
  });
}