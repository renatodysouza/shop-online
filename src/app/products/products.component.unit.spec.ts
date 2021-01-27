import { ProductsComponent } from './products.component';
import { of } from 'rxjs';
const  mockProduct = [
  {id:'1',name:'Generic Steel Towels',
  price:'660.00',
  photo:'http://lorempixel.com/640/480/cats'
}];

class ProductsServiceMock {
  getProducts() {
    return of(mockProduct);
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

  it('should getProduct return ', () => {
    component.ngOnInit();
    expect(component.productList).toEqual(mockProduct);
  });

  it('should be return number 2', () => {
    component.completeAllProductLength = 19;
    const mumberProductByPag = 8;
    const result = component.getNumberOfPages(mumberProductByPag);
    expect(result.length).toBe(3);
  });

  it('should getProduct return 3', () => {
    component.changeNumberPage(3);
    expect(component.actualNumber).toBe(3);
  });

  it('should setProductByPage() return mock1 index 0', () => {
    const productList: any = ['mock1', 'mock2', 'mock3', 'mock4', 'mock5','mock6'];
    component.numberOfProductsByPag = 3;
    component.actualNumber = 1;
    const result = component.setProductByPage(productList as any);
    expect(result[0] as any).toBe('mock1');
  });

  it('should setProductByPage() return mock4 index 0', () => {
    const productList = ['mock1', 'mock2', 'mock3', 'mock4', 'mock5','mock6'];
    component.numberOfProductsByPag = 3;
    component.actualNumber = 2;
    const result = component.setProductByPage(productList as any);
    expect(result[0] as any ).toBe('mock4');
  });

  it('should be called getProductList() when changeNumberPage is called', () => {
    const spy = spyOn(component, 'getProductList');
    component.changeNumberPage(1);
    expect(spy).toHaveBeenCalled();
  });


});
