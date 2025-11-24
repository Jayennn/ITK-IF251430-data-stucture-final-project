import { RedBlackTree } from './rbt/Tree';
import { Trie } from './trie/Trie';
import { type Entry } from '../models/entry';
import dummy from '../data/data.json';
/* example object access */

const dictionaries = dummy.data;

const tree = new RedBlackTree<Entry['keyword'], Entry>();
const trie = new Trie();
dictionaries.forEach((dict): void => {
  tree.insert(dict.keyword, dict);
  trie.insert(dict.keyword);
});

const root = tree.root;
const suggestion = trie.suggest('al');

console.log(suggestion);
console.log(tree.inOrderTraversal(root));
