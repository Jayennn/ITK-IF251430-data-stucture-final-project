import dummy from '../data/data.json';
import type { Entry } from '../models/entry';
import { DictionaryService } from '../services/DictionaryService';
import { RedBlackTree } from '../structures/rbt/Tree';

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

console.log('EN RBT Total Nodes:', TREE_KEYWORD_EN.getTotalNodes());
console.log('ID RBT Total Nodes:', TREE_KEYWORD_ID.getTotalNodes());

export const dictionaryService = new DictionaryService(
  TREE_KEYWORD_ID,
  TREE_KEYWORD_EN
);
