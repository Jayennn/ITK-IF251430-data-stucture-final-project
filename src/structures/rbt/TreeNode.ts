export enum Color {
  RED = 'RED',
  BLACK = 'BLACK',
}

export class Node<K, V> {
  private readonly _key: K;
  _data: V;
  _color: Color;
  _left!: Node<K, V>;
  _right!: Node<K, V>;
  _parent!: Node<K, V>;

  constructor(key: K, data: V) {
    this._key = key;
    this._data = data;
    this._color = Color.RED;
  }

  public get key(): K {
    return this._key;
  }

  public get data(): V {
    return this._data;
  }

  public toString(): string {
    return `Node(\nkey:\n${this.key})`;
  }
}
