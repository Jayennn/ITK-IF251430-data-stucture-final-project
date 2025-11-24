import { RedBlackTree } from './rbt/Tree';
import { type Entry } from '../models/entry';
import dummy from '../data/data.json';
/* example object access */

const dictionaries = dummy.data;

const tree = new RedBlackTree<Entry['keyword'], Entry>();

dictionaries.forEach((dict): void => {
  console.log(dict.keyword, tree.insert(dict.keyword, dict));
});

const root = tree.root;
console.log(tree.inOrderTraversal(root));
