import dummy from '../data/data.json';
import type { Entry } from '../models/entry';
import { DictionaryService } from '../services/DictionaryService';
import { RedBlackTree } from '../structures/rbt/Tree';
import { Naruto } from '../components/Naruto';

/* Raw Data */
const dictionary: Entry[] = dummy.data;

const TREE_KEYWORD_ID: RedBlackTree<string, Entry> = new RedBlackTree<
  string,
  Entry
>();
const TREE_KEYWORD_EN: RedBlackTree<string, Entry> = new RedBlackTree<
  string,
  Entry
>();

dictionary.forEach((dict) => {
  TREE_KEYWORD_ID.insert(dict.keyword_id, dict);
  TREE_KEYWORD_EN.insert(dict.keyword_en, dict);
});

const dictionaryEasterEgg: Entry[] = [
  {
    keyword_id: 'Buram',
    keyword_en: 'Blur',
    definition:
      'Kondisi penglihatan yang tidak jelas, biasanya terjadi saat bangun tidur atau lupa pakai kacamata.',
    easterEgg: {
      action: () => {
        const root: HTMLElement = document.getElementById('root')!;

        root.classList.add('blur');

        setTimeout(() => {
          root.classList.remove('blur');
        }, 5000);
      },
    },
  },
  {
    keyword_id: 'Naruto',
    keyword_en: 'Naruto',
    definition: 'Lorem ipsum',
    easterEgg: {
      component: Naruto,
    },
  },
];

dictionaryEasterEgg.forEach((dict) => {
  TREE_KEYWORD_ID.insert(dict.keyword_id, dict);
  TREE_KEYWORD_EN.insert(dict.keyword_en, dict);
});

console.log('EN RBT Total Nodes:', TREE_KEYWORD_EN.getTotalNodes());
console.log('ID RBT Total Nodes:', TREE_KEYWORD_ID.getTotalNodes());

const query = TREE_KEYWORD_ID.getNodesByKeyword('buram');

console.log(query);

export const dictionaryService = new DictionaryService(
  TREE_KEYWORD_ID,
  TREE_KEYWORD_EN
);
