import { Color, Node } from "./node";

export class RedBlackTree<K, V> {
  root: Node<K, V>;
  private readonly NIL: Node<K, V>;

  constructor() {
    this.NIL = new Node<K, V>(null as unknown as K, null as unknown as V);
    this.NIL._color = Color.BLACK;
    this.NIL._left = this.NIL;
    this.NIL._right = this.NIL;
    this.NIL._parent = this.NIL;
    this.root = this.NIL;
  }


  public insert(key: K, value: V): void {
    // 1. Create new node
    const node = new Node(key, value)
    node._parent = this.NIL;
    node.value = value;
    node._left = this.NIL;
    node._right = this.NIL;
    node._color = Color.RED;

    // 2. Search insert position
    let parent = this.NIL;
    let current = this.root;

    while (current !== this.NIL) {
      parent = current
      if (key < current.key) current = current._left;
      else current = current._right;
    };

    node._parent = parent;
    
    if (parent === this.NIL) {
      this.root = node;
    } else if (key < parent.key) {
      parent._left = node;
    } else {
      parent._right = node;
    };
    
    // 3. fix with rule RBT
    this.fixInsert(node);
  };

  private fixInsert(node: Node<K, V>): void {
    // TODO: fixinsert code
  }

  private leftRotate(node: Node<K, V>): void {
    // TODO: leftRotate code
  }

  private rightRotate(node: Node<K, V>): void {
    // TODO: rightRotate code
  }
  

  public inOrderTraversal(node: Node<K, V>): void {
    if (node === this.NIL) {
      return;
    };

    this.inOrderTraversal(node._left);
    console.log(`key: ${node.key}, value: ${node.value}, color: ${node._color}`);
    this.inOrderTraversal(node._right);
  };

  // public search(data: V): Node<K, V> { return this.NIL }
}