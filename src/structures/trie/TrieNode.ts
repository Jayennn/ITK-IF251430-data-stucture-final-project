export class TrieNode {
  private _children: Map<string, TrieNode>;
  private _isWord: boolean;

  constructor() {
    this._children = new Map();
    this._isWord = false;
  }

  public set children(children: Map<string, TrieNode>) {
    this._children = children;
  }

  public set isWord(isWord: boolean) {
    this._isWord = isWord;
  }

  public get children(): Map<string, TrieNode> {
    return this._children;
  }

  public get isWord(): boolean {
    return this._isWord;
  }
}
