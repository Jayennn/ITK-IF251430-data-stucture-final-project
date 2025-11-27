import type { Entry } from '../../models/entry';
import { Color, Node } from './TreeNode';

export class RedBlackTree<K extends string, V extends Entry> {
  private _root: Node<K, V>;
  private readonly NIL: Node<K, V>;

  constructor() {
    this.NIL = {} as Node<K, V>;
    this.NIL._color = Color.BLACK;
    this.NIL._left = this.NIL;
    this.NIL._right = this.NIL;
    this.NIL._parent = this.NIL;

    this._root = this.NIL;
  }

  public insert(key: K, data: V): V {
    const node = new Node(key, data);
    node._color = Color.RED;
    node._left = this.NIL;
    node._right = this.NIL;
    node._parent = this.NIL;

    let parent: Node<K, V> = this.NIL;
    let current: Node<K, V> = this._root;

    while (current !== this.NIL) {
      parent = current;

      if (this.compare(key, current.key) === 0) {
        // console.log(key, current.key);
        throw new Error('Duplicate key');
      }

      if (this.compare(key, current.key) < 0) {
        current = current._left;
      } else {
        current = current._right;
      }
    }

    node._parent = parent;

    if (parent === this.NIL) {
      this._root = node;
    } else if (this.compare(node.key, parent.key) < 0) {
      parent._left = node;
    } else {
      parent._right = node;
    }

    this.fixInsert(node);
    return node._data;
  }

  public search(keyword: string): V | undefined {
    let current = this._root;

    while (current !== this.NIL) {
      console.log(current);
      if (current.key === keyword) {
        return current._data;
      }

      if (keyword < current.key) {
        current = current._left;
      } else {
        current = current._right;
      }
    }

    return undefined;
  }

  private leftRotate(x: Node<K, V>): void {
    const y: Node<K, V> = x._right;
    x._right = y._left;

    if (y._left !== this.NIL) {
      y._left._parent = x;
    }

    y._parent = x._parent;

    if (x._parent === this.NIL) {
      this._root = y;
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
      this._root = y;
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

    this._root._color = Color.BLACK;
  }

  private printHelper(root: Node<K, V>): void {
    let color: string;

    if (root._color === Color.RED) {
      color = 'R';
    } else {
      color = 'B';
    }

    console.log(`${root.key} (${color})`);
  }

  public getNodesByKeyword(keyword: string): V[] {
    const result: V[] = [];

    this.getNodesByKeywordRecursive(this._root, keyword, result);

    return result;
  }

  private getNodesByKeywordRecursive(
    currentNode: Node<K, V>,
    keyword: string,
    result: V[]
  ) {
    if (currentNode === this.NIL) return;

    const keyword_id = currentNode._data.keyword_id.toLowerCase();
    const keyword_en = currentNode._data.keyword_en.toLowerCase();

    if (
      keyword_id.includes(keyword.toLowerCase()) ||
      keyword_en.includes(keyword.toLowerCase())
    ) {
      result.push(currentNode._data);
    }

    this.getNodesByKeywordRecursive(currentNode._left, keyword, result);
    this.getNodesByKeywordRecursive(currentNode._right, keyword, result);
  }

  private collectInOrder(node: Node<K, V>, result: V[]): V[] {
    if (node === this.NIL) return result;

    this.collectInOrder(node._left, result);
    result.push(node._data);
    this.collectInOrder(node._right, result);

    return result;
  }

  public inOrderTraversal(root: Node<K, V> = this._root): void {
    if (root === this.NIL) return;

    this.inOrderTraversal(root._left);
    this.printHelper(root);
    this.inOrderTraversal(root._right);
  }

  private compare(a: K, b: K): number {
    return a.localeCompare(b, 'id');
  }

  public getTotalNodes(): number {
    return this.getTotalNodesRecursive(this.root);
  }

  public getTotalNodesRecursive(currentNode: Node<K, V>): number {
    if (currentNode === this.NIL) return 0;

    return (
      1 +
      this.getTotalNodesRecursive(currentNode._left) +
      this.getTotalNodesRecursive(currentNode._right)
    );
  }

  public getData(): V[] {
    const result: V[] = [];
    return this.collectInOrder(this._root, result);
  }

  public get root(): Node<K, V> {
    return this._root;
  }
}
