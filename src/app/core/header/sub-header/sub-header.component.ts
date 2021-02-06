import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { State, ProductState } from '../../../products/state/product.reducer';
import { Product } from '../../../products/product';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  faSearch = faSearch;
  badgeFavoriteNumber = 0;
  badgeCartNumber = 0;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getNumberOfProducts();
  }

  getNumberOfProducts() {
    this.store.select('products')
    .subscribe(
      (prod: any) => {
        this.badgeFavoriteNumber = prod.favorite.length;
        this.badgeCartNumber = prod.cart.length;
    });
  }

}
