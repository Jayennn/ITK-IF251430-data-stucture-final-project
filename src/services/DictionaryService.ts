import type { Entry } from '../models/entry';
import type { RedBlackTree } from '../structures/rbt/Tree';

export class DictionaryService {
  constructor(
    private id_tree: RedBlackTree<string, Entry>,
    private en_tree: RedBlackTree<string, Entry>
  ) {}

  public getAllData(): Entry[] {
    this.en_tree.getData();
    return this.id_tree.getData();
  }

  public findByKeyword(keyword: string): Entry[] {
    const normalized = keyword.toLowerCase();

    return this.id_tree
      .getData()
      .filter(
        (e) =>
          e.keyword_id.toLowerCase().includes(normalized) ||
          e.keyword_en.toLowerCase().includes(normalized)
      );
  }
}
