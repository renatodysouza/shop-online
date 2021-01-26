import { TestBed, async } from '@angular/core/testing';

import { ProductService } from './product.service';


class HttpMock { }
describe('ProductService', () => {
  let service: ProductService;
  let httpMock:
/*   beforeEach(() => {
    httpMock = new HttpMock();
    service  = new ProductService(httpMock);
  }); */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created method getProducts', () => {
    expect(service.getProducts()).toBe(true);
  });
});
