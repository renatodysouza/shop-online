import { ProductService } from './product.service';
import { of } from 'rxjs';

fdescribe('ProductService', () => {
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
      expect(service.urlProducts).toBe('https://fakestoreapi.com/products');
  });
});
