import { RedBlackTree } from './rbt/Tree';
import { Trie } from './trie/Trie';
import { type Entry } from '../models/entry';
import dummy from '../data/data.json';
/* example object access */

const dictionaries: Entry[] = dummy.data;
const dictionariesWithEasterEgg: Entry[] = [
  {
    keyword: 'naruto',
    definition: 'naruto',
    easterEgg: () => console.log('testing easter egg'),
  },
];

const tree = new RedBlackTree<Entry['keyword'], Entry>();
const trie = new Trie();

dictionaries.forEach((dict): void => {
  tree.insert(dict.keyword, dict);
  trie.insert(dict.keyword);
});

dictionariesWithEasterEgg.forEach((dict): void => {
  tree.insert(dict.keyword, dict);
});

const root = tree.root;
// const suggestion = trie.suggest('al');
const byKeyword = tree.getNodesByKeyword('a');
const search = tree.search('algorithm');

byKeyword.forEach((entry) => {
  if (!entry.easterEgg) return;
  entry.easterEgg();
});

console.log(byKeyword);
console.log(search);
console.log(tree.inOrderTraversal(root));
