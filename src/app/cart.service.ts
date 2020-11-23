import { Injectable } from '@angular/core';
import { shipping } from 'src/assets/shipping';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return shipping;
  }
  constructor() {}
}
