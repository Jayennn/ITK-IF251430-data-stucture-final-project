import { useState, useEffect } from 'react';
import { autoCompleteService } from '../helpers/dictionary';

export function useSuggestions(keyword: string, delay: number = 300): string[] {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword, delay]);

  useEffect(() => {
    if (!debouncedKeyword || debouncedKeyword.length < 1) {
      setSuggestions([]);
      return;
    }

    const fetchedSuggestions =
      autoCompleteService.getSuggestions(debouncedKeyword);
    setSuggestions(fetchedSuggestions);

    console.log(fetchedSuggestions);
  }, [debouncedKeyword]);

  return suggestions;
}
