/* eslint-disable object-shorthand */
import { Component, OnInit, HostBinding } from '@angular/core';
import { take, catchError, tap, map, pluck, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Product } from './product';
import { ProductService } from './product.service';
import { MainService } from './../main.service';
import * as  ActionProduct from './state/products.actions';
import { State, ProductState } from './state/product.reducer';
import { getErrorProduct, getProductList } from './state/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('showHide', [
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

export class ProductsComponent implements OnInit {
  productList$: Observable<any>;
  numberOfProductsByPag: number;
  errorMessage$: Observable<string>;
  completeAllProductLength: number;
  actualNumber: number;
  showProductOptions = false;
  idSelected: string;
  numberOfPaginator: Array<any>;
  favoriteId: number;
  cartId: number;
  numberOfPag: Array<any>;


  constructor(
    public productsService: ProductService,
    public mainService: MainService,
    public store: Store<State>) {
    this.numberOfProductsByPag = 15;
    this.actualNumber = 1;
   }

  ngOnInit() {
    this.store.dispatch(ActionProduct.loadProducts());
    this.getProductList();
    this.errorMessage$ = this.store.select(getErrorProduct);

  }

  getProductList() {
    this.productList$ = this.store.select(getProductList)
    .pipe(
      tap((prod) =>  this.getNumberOfPages(prod.length)),
      map(prod => this.setProductByPage(prod))
    );
  }

  listPaginatorSlice() {
    this.productList$ = this.store.select('products')
    .pipe(
      map((res: any) => this.setProductByPage(res.products)
      )
    );
  }

  getNumberOfPages(lengthOfProducts) {
    if (lengthOfProducts === undefined || lengthOfProducts === 0) {
        return new Array(1);
    };
    const numberOfPages = Math.ceil(lengthOfProducts / this.numberOfProductsByPag);
    this.numberOfPag = new Array(numberOfPages);
  }

  changeNumberPage(numberPage: number) {
    this.actualNumber = numberPage;
    this.listPaginatorSlice();
  }

  setProductByPage(productList: Array<Product>) {
    const start = (this.numberOfProductsByPag * this.actualNumber) - this.numberOfProductsByPag ;
    const end = this.numberOfProductsByPag * this.actualNumber;
    if (productList && productList.length > 0) {
      return productList.slice(start,end);
    }
  }

  getProductAdded(product: Product) {
     this.mainService.setProductInCart(product);
  }

  disableControlProductOptions() {
    this.showProductOptions = false;
  }

  controlProductOptions(event) {
    this.idSelected = event.target.id;
    this.showProductOptions = true;
  }

  setFavorite(product: Product[], index: number) {
    this.favoriteId = index;
    this.store.dispatch(ActionProduct.setFavorite({product}));
  }

  setCart(products: Product, index: number) {
    this.cartId = index;
    this.store.dispatch(ActionProduct.setCart({products}));
    this.store.dispatch(ActionProduct.isAddProductInCart({isAdd: true}));
    this.store.dispatch(ActionProduct.getTotalCart());
  }
}
