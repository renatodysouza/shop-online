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
  productsCart = [
    {id:'1',name:'Generic Steel Towels',
    price:'660.00',
    photo:'http://lorempixel.com/640/480/cats'
  }];
  constructor() { }

  ngOnInit(): void {
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

}
