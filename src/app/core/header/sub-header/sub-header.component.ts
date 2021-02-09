import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { State, ProductState } from '../../../products/state/product.reducer';
import * as  ActionProduct from '../../../products/state/products.actions';
import { map } from 'rxjs/internal/operators/map';
import { getAddCartEvent } from 'src/app/products/state/product.selector';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { concat } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { delay } from 'rxjs/internal/operators/delay';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  animations: [
    trigger('showHideCart', [
      state('open', style({
        display: 'flex',
        opacity: 1,
      })),
      state('closed', style({
        display: 'none',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class SubHeaderComponent implements OnInit {
  faSearch = faSearch;
  badgeFavoriteNumber = 0;
  badgeCartNumber = 0;
  showCart = false;
  totalCart$: Observable<string>;
  isAddInCart$: Observable<boolean>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getNumberOfProducts();
    this.totalCart$ = this.store.select('products')
      .pipe(
        map(res => res.totalCart),
      );
    this.isAddInCart$ = this.store.select(getAddCartEvent)
    .pipe(tap(() => this.closeCartModal()));
  }

  closeCartModal() {
    of(true).pipe(
      delay(1200)
    ).subscribe(() => this.store.dispatch(ActionProduct.isAddProductInCart({ isAdd: false })));
  }

  getNumberOfProducts() {
    this.store.select('products')
      .subscribe(
        (prod: any) => {
          this.badgeFavoriteNumber = prod?.favorite?.length;
          this.badgeCartNumber = prod?.cart?.length;
        });
  }

  closeShowModal() {
    this.showCart = false;
  }

  openShowModal() {
    this.showCart = true;
  }

}
