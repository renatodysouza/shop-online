import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { take, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product';
import { EmptyError } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  productList$: Observable<any>;
  numberOfProductsByPag: number;
  errorMessage: string;
  completeAllProductLength: number;
  actualNumber: number;
  constructor(
    private productsService: ProductService,
    private mainService: MainService) {
    this.numberOfProductsByPag = 8;
    this.actualNumber = 1;
   }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productList$ = this.productsService.products$
    .pipe(
      catchError((error => {
        this.errorMessage = error.message;
        return EmptyError;
      }))
    );
  }

  getNumberOfPages(mumberProductByPag: number ) {
    if (this.completeAllProductLength === 0) {
        return new Array(1);
    };
    const numberList = this.completeAllProductLength;
    const numberOfPages = Math.ceil(numberList / mumberProductByPag);
    return new Array(numberOfPages);
  }

  changeNumberPage(numberPage: number) {
    this.actualNumber = numberPage;
    this.getProductList();
  }

  setProductByPage(productList: Array<Product>) {
    const start = (this.numberOfProductsByPag * this.actualNumber) - this.numberOfProductsByPag ;
    const end = this.numberOfProductsByPag * this.actualNumber;
    return productList.slice(start,end);
  }

  getProductAdded(product: Product) {
     this.mainService.setProductInCart(product);
  }
}

