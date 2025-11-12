export enum Color {
  RED = 'RED',
  BLACK = 'BLACK'
};


export class Node<K, V> {
  readonly key: K;
  value: V;
  _left!: Node<K, V>;
  _right!: Node<K, V>;
  _parent!: Node<K, V>;
  _color: Color = Color.RED;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this._color = Color.RED;
  }

  isRed(): boolean {
    return this._color === Color.RED;
  };

  isBlack(): boolean {
    return this._color === Color.BLACK;
  };

  setColor(color: Color): void {
    this._color = color;
  };
};
