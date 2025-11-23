import { RedBlackTree } from './tree';

const tree = new RedBlackTree<number, string>();

tree.insert(10, 'Sepuluh');
tree.insert(5, 'Lima');
tree.insert(1, 'Satu');
tree.insert(7, 'Tujuh');
tree.insert(40, 'Empat Puluh');
tree.insert(30, 'Tiga Puluh');
tree.insert(70, 'Tujuh Puluh');
tree.insert(80, 'Delapan Puluh');
tree.insert(35, 'Tiga Puluh Lima');
tree.insert(6, 'Enam');
const root = tree.getRoot();

console.log(tree.inOrderTraversal(root));
