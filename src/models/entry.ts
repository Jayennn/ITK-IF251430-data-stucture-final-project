import type { ComponentType } from 'react';

export type Entry = {
  keyword_id: string;
  keyword_en: string;
  definition: string;
  easterEgg?: {
    action?: () => unknown | null;
    component?: ComponentType;
  };
};
