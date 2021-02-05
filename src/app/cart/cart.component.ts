import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  fatrash = faTrash;
  faTruck = faTruck;
  quantity = 1;
  productsCart: Array<any>;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.productsCart = this.mainService.productCollection;
    this.getCartProduct();
  }

  incremmentQuantity() {
    this.quantity ++;
  }

  decremmentQuantity() {
    if (this.quantity === 1) {
      this.quantity = 1;
      return;
    }
    this.quantity --;
  }

  getCartProduct() {
    this.mainService.productInCartEmitter.subscribe(product => {
      this.productsCart = product;
    });
  }

}
