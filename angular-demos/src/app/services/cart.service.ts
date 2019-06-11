import { Injectable } from '@angular/core';
import { LineItem } from '../models/line-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<LineItem> = [];

  constructor() { }

  addToCart(product: Product, quantity: number = 1): void {
    const item = new LineItem();
    item.product = { ...product }; // item.product = Object.assign({}, product)
    item.quantity = quantity;

    const index = this.cart.findIndex(itm => itm.product.id === product.id);
    if (index === -1) {
      this.cart.push(item);
    }
    else {
      if (quantity === 0) {
        this.cart.splice(index, 1);
      }
      else {
        this.cart[index] = item;
      }
    }
  }
}
