import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { of } from 'rxjs';

const productsCart = [
  {id:'1',name:'Generic Steel Towels',
  price:'660.00',
  photo:'http://lorempixel.com/640/480/cats'
}];

class MainServiceMock {
  productInCartEmitter = of(productsCart);
  setProductInCart() {
    return of(productsCart);
  }
}

describe('CartComponent', () => {
  let component: CartComponent;
  let mainServiceMock: any;


  beforeEach( () => {
    mainServiceMock = new MainServiceMock();
    component = new CartComponent(mainServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be incremented 2 when incremmentQuantity is called', () => {
    component.incremmentQuantity();
    expect(component.quantity).toBe(2);
  });

  it('should be decremented 1 when decremmentQuantity is called', () => {
    component.decremmentQuantity();
    expect(component.quantity).toBe(1);
  });

  it('should be ', () => {
    component.getCartProduct();
    expect(component.productsCart).toBe(productsCart);
  });

});
