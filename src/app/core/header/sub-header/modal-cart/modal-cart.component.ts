import { getTotalCart } from './../../../../products/state/products.actions';
import { Product } from './../../../../products/product';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs';
import * as  ActionProduct from './../../../../products/state/products.actions';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss']
})
export class ModalCartComponent implements OnInit {
  productsCart$: Observable<Product>;
  totalCart$: Observable<number>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.getProductCart();
    this.getTotal();
  }

  getProductCart() {
    this.productsCart$ = this.store.select('products')
    .pipe(
      map(res => res.cart),
      tap(console.log)
    );
  }

  getTotal() {
    this.totalCart$ = this.store.select('products')
    .pipe(
      map(res => res.totalCart),
    );
  }
}
