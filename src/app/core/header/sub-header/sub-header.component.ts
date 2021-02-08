import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { State, ProductState } from '../../../products/state/product.reducer';
import * as  ActionProduct from '../../../products/state/products.actions';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  faSearch = faSearch;
  badgeFavoriteNumber = 0;
  badgeCartNumber = 0;
  showCart = false;
  totalCart$: Observable<string>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getNumberOfProducts();
    this.totalCart$ = this.store.select('products')
    .pipe(
      map(res => res.totalCart),
    );
  }

  getNumberOfProducts() {
    this.store.select('products')
    .subscribe(
      (prod: any) => {
        this.badgeFavoriteNumber = prod.favorite.length;
        this.badgeCartNumber = prod.cart.length;
    });
  }

  showModal() {
      this.showCart = !this.showCart;
  }

}
