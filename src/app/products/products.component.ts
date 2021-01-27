import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { take } from 'rxjs/operators';

interface Products {
  id: string;
  name: string;
  price: string;
  photo: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  productList: Array<Products>;
  numberOfProductsByPag: number;
  completeAllProductLength: number;
  actualNumber: number;
  constructor(private productsService: ProductService) {
    this.numberOfProductsByPag = 8;
    this.actualNumber = 1;
   }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productsService.getProducts()
    .pipe(take(1))
    .subscribe((products: Array<Products>) => {
      this.completeAllProductLength = products.length;
      this.productList = this.setProductByPage(products);
    });
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

  setProductByPage(productList: Array<Products>) {
    const start = (this.numberOfProductsByPag * this.actualNumber) - this.numberOfProductsByPag ;
    const end = this.numberOfProductsByPag * this.actualNumber;
    return productList.slice(start,end);
  }
}

