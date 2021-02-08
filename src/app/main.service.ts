import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  productInCartEmitter = new EventEmitter();
  productCollection = [];
  constructor() { }

  setProductInCart(product: Product) {
    this.productCollection.push(product);
    this.productInCartEmitter.emit(this.productCollection);
  }
}
