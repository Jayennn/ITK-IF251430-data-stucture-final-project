import type { Entry } from '../models/entry';
import type { RedBlackTree } from '../structures/rbt/Tree';
import { Trie } from '../structures/trie/Trie';

export class AutoCompleteService {
  private trie: Trie;
  private id_tree: RedBlackTree<string, Entry>;
  private en_tree: RedBlackTree<string, Entry>;

  constructor(
    id_tree: RedBlackTree<string, Entry>,
    en_tree: RedBlackTree<string, Entry>,

    data_for_trie: Entry[]
  ) {
    this.id_tree = id_tree;
    this.en_tree = en_tree;

    this.trie = new Trie();
    this.initializeTrie(data_for_trie);
  }

  private initializeTrie(data: Entry[]): void {
    data.forEach((entry) => {
      this.trie.insert(entry.keyword_id.toLowerCase());
      this.trie.insert(entry.keyword_en.toLowerCase());
    });
  }

  public getSuggestions(prefix: string): string[] {
    if (!prefix) return [];
    return this.trie.suggest(prefix.toLowerCase());
  }

  public search(keyword: string): Entry[] {
    if (!keyword) return [];
    const normalized = keyword.toLowerCase();

    const result_id = this.id_tree.getNodesByKeyword(normalized);
    const result_en = this.en_tree.getNodesByKeyword(normalized);

    let results: Entry[] = [];
    results = [...result_id, ...result_en];

    const uniqueResults = Array.from(
      new Map(results.map((item) => [item.keyword_id, item])).values()
    );

    return uniqueResults;
  }
}
