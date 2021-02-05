import { Injectable, EventEmitter } from '@angular/core';


interface Products {
  id: string;
  name: string;
  price: string;
  photo: string;
}


@Injectable({
  providedIn: 'root'
})
export class MainService {
  productInCartEmitter = new EventEmitter();
  productCollection = [];
  constructor() { }

  setProductInCart(product: Products) {
    this.productCollection.push(product);
    this.productInCartEmitter.emit(this.productCollection);
  }
}
