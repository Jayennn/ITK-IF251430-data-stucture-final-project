export type Entry = {
  keyword: string;
  definition: string;
  easterEgg?: (() => unknown) | null;
};
