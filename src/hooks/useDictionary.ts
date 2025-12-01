import { type ComponentType, useState, useMemo } from 'react';
import { dictionaryService } from '../helpers/dictionary';
import { Language, type Entry } from '../models/entry';

export function useDictionary() {
  const [component, setComponent] = useState<ComponentType | null>(null);
  const [language, setLanguage] = useState<Language>(Language.ID);
  const [rawResults, setRawResults] = useState<Entry[]>([]);

  function search(keyword: string) {
    setComponent(null);

    if (!keyword.trim()) {
      setRawResults([]);
      return;
    }

    const found = dictionaryService.findByKeyword(keyword);
    setRawResults(found);

    // Trigger easter eggs on EXACT match only
    found.forEach((entry) => {
      if (!entry.easterEgg) return;

      const isExact =
        entry.keyword_id.toLowerCase() === keyword.toLowerCase() ||
        entry.keyword_en.toLowerCase() === keyword.toLowerCase();

      if (!isExact) return;

      const easterEgg = entry.easterEgg!;

      if (easterEgg.action) {
        easterEgg.action();
      }

      if (easterEgg.component) {
        setComponent(() => easterEgg.component!);
      }
    });
  }

  const results = useMemo(() => {
    return rawResults.map((entry) => ({
      ...entry,
      definition:
        language === Language.ID ? entry.definition_id : entry.definition_en,
    }));
  }, [rawResults, language]);

  return {
    results,
    search,
    component,
    setLanguage,
    language,
  };
}
