import { TrieNode } from './TrieNode';

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isWord = true;
  }

  public suggestHelper(node: TrieNode, list: string[], current: string): void {
    if (node.isWord) {
      list.push(current);
    }

    for (const [char, child] of node.children) {
      this.suggestHelper(child, list, current + char);
    }
  }

  public suggest(prefix: string): string[] {
    let node = this.root;
    let current = '';

    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char)!;
      current += char;
    }

    const list: string[] = [];
    this.suggestHelper(node, list, current);
    return list;
  }

  public search(word: string): boolean {
    let node = this.root;

    for (const ch of word) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch)!;
    }

    return node.isWord;
  }
}

// const words = [
//   'hello',
//   'dog',
//   'hell',
//   'cat',
//   'a',
//   'hel',
//   'help',
//   'helps',
//   'helping',
// ];
// const trie = new Trie();

// words.forEach((word) => trie.insert(word));
// console.log(trie.suggest('e'));
