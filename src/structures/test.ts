import { RedBlackTree } from "./tree";


const tree = new RedBlackTree<number, string>();

// Tambah beberapa data
tree.insert(10, "sepuluh");
tree.insert(5, "lima");
tree.insert(20, "dua puluh");
tree.insert(15, "lima belas");

// Tampilkan isi pohon (in-order traversal)
tree.inOrderTraversal(tree.root);
