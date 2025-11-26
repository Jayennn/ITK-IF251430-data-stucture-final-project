import { useState } from 'react';
import { dictionaryService } from '../helpers/dictionary';

export function useDictionary() {
  const [results, setResults] = useState(dictionaryService.getAllData());

  function search(keyword: string) {
    if (!keyword) {
      setResults(dictionaryService.getAllData());
    } else {
      const foundResults = dictionaryService.findByKeyword(keyword);

      setResults(foundResults);

      foundResults.forEach((entry) => {
        if (!entry.easterEgg) return;

        const isExactMatch =
          entry.keyword_id.toLowerCase() === keyword.toLowerCase() ||
          entry.keyword_en?.toLowerCase() === keyword.toLowerCase();

        if (isExactMatch) {
          entry.easterEgg();
        }
      });
    }
  }

  return { results, search };
}
