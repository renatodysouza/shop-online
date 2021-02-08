/* eslint-disable @typescript-eslint/prefer-for-of */
import { take } from 'rxjs/operators';
import { filter } from 'rxjs/internal/operators/filter';
/* eslint-disable arrow-body-style */
import { Product } from './../products/product';
import { Observable } from 'rxjs';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { State } from '../products/state/product.reducer';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import * as  ActionProduct from '../products/state/products.actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  fatrash = faTrash;
  faTruck = faTruck;
  quantity = { };
  listOfCart: Product[];
  productsCart$: Observable<any>;
  totalCart$: Observable<string>;
  subTotal = 0;
  constructor(
    public mainService: MainService,
    public store: Store<State>
  ) { }

  ngOnInit(): void {
    this.getCartProduct();
    this.getTotal();
  }

  getTotal() {
    this.totalCart$ = this.store.select('products')
    .pipe(
      map(res => res.totalCart),
    );
  }

  getPriceProduct(price, index) {
    return price * (this.quantity[index] || 1);
  }

  incremmentQuantity(id, index) {
    this.store.dispatch(ActionProduct.addQuantiCart({id}));
    this.setIndexQuantity(index, true);
  }
// see more
  setIndexQuantity(index, operate) {
    if (this.quantity[index] === undefined) {
      this.quantity[index] = 2;
    } else {
      const operator = operate ? this.quantity[index]++ :
      this.quantity[index]--;
    }
  }

   decremmentQuantity(cartId, index) {
     if (this.quantity[index] === 1) {
       return;
     }
    this.store.dispatch(ActionProduct.decreQuantiCart({cartId}));
    this.setIndexQuantity(index, false);
  }

  getCartProduct() {
    this.productsCart$ = this.store.select('products')
    .pipe(
      map(product => product.cart),
      tap(cart => this.listOfCart = cart),
    );
  }

  deleteProduct(product: Product) {
    this.store.dispatch(ActionProduct.deleteCart({id: product.id}));
  }

}
