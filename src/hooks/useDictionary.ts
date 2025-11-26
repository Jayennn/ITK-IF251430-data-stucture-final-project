import { useState } from 'react';
import { dictionaryService } from '../helpers/dictionary';

export function useDictionary() {
  const [results, setResults] = useState(dictionaryService.getAllData());

  function search(keyword: string) {
    if (!keyword) {
      setResults(dictionaryService.getAllData());
    } else {
      setResults(dictionaryService.findByKeyword(keyword));
    }
  }

  return { results, search };
}
