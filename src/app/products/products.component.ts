/* eslint-disable object-shorthand */
import { Component, OnInit, HostBinding } from '@angular/core';
import { take, catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { EmptyError, of } from 'rxjs';
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
  numberOfProductsByPag = 8;
  errorMessage: string;
  completeAllProductLength: number;
  actualNumber: number;
  showProductOptions = false;
  idSelected: string;
  numberOfPaginator: Array<any>;
  lengthOfProducts: number;
  favoriteId: number;
  cartId: number;


  constructor(
    public productsService: ProductService,
    public mainService: MainService,
    public store: Store<State>) {
    this.numberOfProductsByPag = 8;
    this.actualNumber = 1;
   }

  ngOnInit() {
    this.setProducts();
  }

  getProductList() {
    this.productList$ = this.store.select('products');
  }

  listPaginatorSlice() {
    this.productList$ = this.store.select('products')
    .pipe(
      map((res: any) => this.setProductByPage(res.products)
      )
    );
  }

  setProducts() {
    this.productList$ = this.productsService.products$
    .pipe(
      tap(
        (products: Array<Product>) => {
          this.lengthOfProducts = products.length;
          this.store.dispatch(ActionProduct.setProducts({products: products}));
      }),
      catchError((error) => {
        this.errorMessage = error.message;
        return EmptyError;
      })
    );
  }

  getNumberOfPages() {
    if (this.lengthOfProducts === 0) {
        return new Array(1);
    };
    const numberOfPages = Math.ceil(this.lengthOfProducts / this.numberOfProductsByPag);
    return new Array(numberOfPages);
  }

  changeNumberPage(numberPage: number) {
    this.actualNumber = numberPage;
    this.listPaginatorSlice();
  }

  setProductByPage(productList: Array<Product>) {
    const start = (this.numberOfProductsByPag * this.actualNumber) - this.numberOfProductsByPag ;
    const end = this.numberOfProductsByPag * this.actualNumber;
    return productList.slice(start,end);
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
    this.store.dispatch(ActionProduct.getTotalCart());
  }
}

