import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

class ProductsServiceMock {
  getProducts() {
    return '';
  }
}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let productsServiceMock: any;

  beforeEach((() => {
    productsServiceMock = new ProductsServiceMock();
    component = new ProductsComponent(productsServiceMock);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
