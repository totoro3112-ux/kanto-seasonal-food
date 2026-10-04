export type ProduceCategory = "vegetable" | "fruit";

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Produce = {
  id: string;
  name: string;
  nameKana: string;
  category: ProduceCategory;
  peakMonths: Month[];
  availableMonths: Month[];
  prefectures: string[];
  description: string;
};
