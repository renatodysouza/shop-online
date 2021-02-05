import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    service = new MainService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const spy = spyOn(service.productInCartEmitter, 'emit');
    const product = ['product'];
    service.setProductInCart(product as any);
    expect(spy).toHaveBeenCalled();
  });
});
