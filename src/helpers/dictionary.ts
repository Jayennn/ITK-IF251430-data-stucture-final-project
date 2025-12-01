import dummy from '../data/data.json';
import type { Entry } from '../models/entry';
import { DictionaryService } from '../services/DictionaryService';
import { RedBlackTree } from '../structures/rbt/Tree';
import { Naruto } from '../components/Naruto';
import { Trie } from '../structures/trie/Trie';
import { Calculator } from '../components/Calculator';

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

const autocom = new Trie();

dictionary.forEach((dict) => {
  TREE_KEYWORD_ID.insert(dict.keyword_id, dict);
  TREE_KEYWORD_EN.insert(dict.keyword_en, dict);
  autocom.insert(dict.keyword_id);
});

const dictionaryEasterEgg: Entry[] = [
  {
    keyword_id: 'Buram',
    keyword_en: 'Blur',
    definition_id:
      'Kondisi penglihatan yang tidak jelas, biasanya terjadi saat bangun tidur atau lupa pakai kacamata.',
    definition_en:
      'A condition of unclear vision, usually occurs when waking up or forgetting to wear glasses.',
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
    definition_id:
      'Serial manga dan anime Jepang yang menceritakan petualangan ninja bernama Naruto Uzumaki.',
    definition_en:
      'A Japanese manga and anime series that follows the adventures of a ninja named Naruto Uzumaki.',
    easterEgg: {
      component: Naruto,
    },
  },
  {
    keyword_id: 'Kalkulator',
    keyword_en: 'Calculator',
    definition_id: 'lorem',
    definition_en: 'lorem',
    easterEgg: {
      component: Calculator,
    },
  },
];

dictionaryEasterEgg.forEach((dict) => {
  TREE_KEYWORD_ID.insert(dict.keyword_id, dict);
  TREE_KEYWORD_EN.insert(dict.keyword_en, dict);
  autocom.insert(dict.keyword_id);
});

console.log('EN RBT Total Nodes:', TREE_KEYWORD_EN.getTotalNodes());
console.log('ID RBT Total Nodes:', TREE_KEYWORD_ID.getTotalNodes());

console.log(autocom.suggest('a'));

export const dictionaryService = new DictionaryService(
  TREE_KEYWORD_ID,
  TREE_KEYWORD_EN
);
