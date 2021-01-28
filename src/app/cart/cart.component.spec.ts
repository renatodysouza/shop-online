import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;

  beforeEach( () => {
    component = new CartComponent();
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


});
