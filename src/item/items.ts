import {Item} from './item';


export class Items {

  private items: Map<Item, number>;


  constructor(items?: Map<Item, number>) {

    this.items = items || new Map<Item, number>();
  }


  add(item: Item): Items {

    if (!item) throw 'item cannot be null';

    const items = new Map<Item, number>(this.items);

    const quantity = items.get(item) || 0;
    items.set(item, quantity + 1);

    return new Items(items);
  }

  list(): Array<Item> {

    return Array.from(this.items.keys());
  }

  getQuantity(item: Item): number {

    if (!item) throw 'item cannot be null';

    return this.items.get(item) || 0;
  }
}