import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let httpSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductService(httpSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getProducts return mockProd', () => {
    const mockProduct = [
      {id:'1',name:'Generic Steel Towels',
      price:'660.00',
      photo:'http://lorempixel.com/640/480/cats'
    }];
    httpSpy.get.and.returnValue(of(mockProduct));
    service.getProducts().subscribe(
      res => {
        expect(res).toBe(mockProduct);
      });
  });

});
