import { type ComponentType, useState } from 'react';
import { dictionaryService } from '../helpers/dictionary';
import type { Entry } from '../models/entry';

export function useDictionary() {
  const [component, setComponent] = useState<ComponentType | null>(null);
  const [results, setResults] = useState<Entry[]>([]);

  function search(keyword: string) {
    setComponent(null);

    if (!keyword) {
      setResults([]);
      return;
    }

    const foundResults = dictionaryService.findByKeyword(keyword);
    setResults(foundResults);

    foundResults.forEach((entry) => {
      if (!entry.easterEgg) return;

      const isExactMatch =
        entry.keyword_id.toLowerCase() === keyword.toLowerCase() ||
        entry.keyword_en?.toLowerCase() === keyword.toLowerCase();

      if (!isExactMatch) return;
      // if(typeof )
      const easterEgg = entry.easterEgg;
      if (easterEgg.action) {
        easterEgg.action();
      }

      if (easterEgg.component) {
        setComponent(() => easterEgg.component!);
      }
      // entry.easterEgg();
    });
  }

  return { results, search, component };
}
