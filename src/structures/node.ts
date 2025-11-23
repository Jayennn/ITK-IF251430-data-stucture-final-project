export enum Color {
  RED = 'RED',
  BLACK = 'BLACK',
}

export class Node<K, V> {
  readonly key: K;
  _data: V;
  _color: Color;
  _left!: Node<K, V>;
  _right!: Node<K, V>;
  _parent!: Node<K, V>;

  constructor(key: K, data: V) {
    this.key = key;
    this._data = data;
    this._color = Color.RED;
    // this._left = null;
    // this._right = null;
    // this._parent = null;
  }
}
