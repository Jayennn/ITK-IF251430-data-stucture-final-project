export type Entry = {
  keyword_id: string;
  keyword_en: string;
  definition: string;
  easterEgg?: (() => unknown) | null;
};
