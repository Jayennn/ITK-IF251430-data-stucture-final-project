import { Color, Node } from './node';

export class RedBlackTree<K, V> {
  private root: Node<K, V>;
  private readonly NIL: Node<K, V>;

  constructor() {
    this.NIL = {} as Node<K, V>;
    this.NIL._color = Color.BLACK;
    this.NIL._left = this.NIL;
    this.NIL._right = this.NIL;
    this.NIL._parent = this.NIL;

    this.root = this.NIL;
  }

  public insert(key: K, data: V): void {
    const node = new Node(key, data);
    node._color = Color.RED;
    node._left = this.NIL;
    node._right = this.NIL;
    node._parent = this.NIL;

    let parent: Node<K, V> = this.NIL;
    let current: Node<K, V> = this.root;

    while (current !== this.NIL) {
      parent = current;
      if (key < current.key) {
        current = current._left;
      } else {
        current = current._right;
      }
    }

    node._parent = parent;

    if (parent === this.NIL) {
      this.root = node;
    } else if (node.key < parent.key) {
      parent._left = node;
    } else {
      parent._right = node;
    }

    this.fixInsert(node);
  }

  private leftRotate(x: Node<K, V>): void {
    const y: Node<K, V> = x._right;
    x._right = y._left;

    if (y._left !== this.NIL) {
      y._left._parent = x;
    }

    y._parent = x._parent;

    if (x._parent === this.NIL) {
      this.root = y;
    } else if (x === x._parent._left) {
      x._parent._left = y;
    } else {
      x._parent._right = y;
    }

    y._left = x;
    x._parent = y;
  }

  private rightRotate(x: Node<K, V>): void {
    const y: Node<K, V> = x._left;
    x._left = y._right;

    if (y._right !== this.NIL) {
      y._right._parent = x;
    }

    y._parent = x._parent;

    if (x._parent === this.NIL) {
      this.root = y;
    } else if (x === x._parent._right) {
      x._parent._right = y;
    } else {
      x._parent._left = y;
    }

    y._right = x;
    x._parent = y;
  }

  private fixInsert(node: Node<K, V>): void {
    let parent: Node<K, V>;
    let grandparent: Node<K, V>;

    while (node._parent._color === Color.RED) {
      parent = node._parent;
      grandparent = parent._parent;

      if (parent === grandparent._left) {
        const uncle: Node<K, V> = grandparent._right;

        if (uncle !== this.NIL && uncle._color == Color.RED) {
          parent._color = Color.BLACK;
          uncle._color = Color.BLACK;
          grandparent._color = Color.RED;

          node = grandparent;
        } else {
          if (node === parent._right) {
            this.leftRotate(parent);
            node = parent;
            parent = node._parent;
          }

          this.rightRotate(grandparent);

          parent._color = Color.BLACK;
          grandparent._color = Color.RED;
          node = parent;
        }
      } else {
        const uncle: Node<K, V> = grandparent._left;

        if (uncle !== this.NIL && uncle._color === Color.RED) {
          parent._color = Color.BLACK;
          uncle._color = Color.BLACK;
          grandparent._color = Color.RED;
          node = grandparent;
        } else {
          if (node === parent._left) {
            this.rightRotate(parent);
            node = parent;
            parent = node._parent;
          }

          this.leftRotate(grandparent);
          parent._color = Color.BLACK;
          grandparent._color = Color.RED;
          node = parent;
        }
      }
    }

    this.root._color = Color.BLACK;
  }

  private printHelper(root: Node<K, V>): void {
    let color: string;

    if (root._color === Color.RED) {
      color = 'R';
    } else {
      color = 'B';
    }

    console.log(`${root._data} (${color})`);
  }

  public inOrderTraversal(root: Node<K, V>): void {
    if (root === this.NIL) return;

    this.inOrderTraversal(root._left);
    this.printHelper(root);
    this.inOrderTraversal(root._right);
  }

  public getRoot(): Node<K, V> {
    return this.root;
  }
}
