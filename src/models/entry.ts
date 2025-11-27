import type { ComponentType } from 'react';

export enum Language {
  ID = 'IDN',
  EN = 'ENG',
}

export type Entry = {
  keyword_id: string;
  keyword_en: string;
  definition_id: string;
  definition_en: string;
  easterEgg?: {
    action?: () => unknown | null;
    component?: ComponentType;
  };
};
