import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { MainService } from '../main.service';
import { ProductService } from './product.service';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { map } from 'rxjs/internal/operators/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { tap } from 'rxjs/internal/operators/tap';

class MockProductsService {
  products$ = of(
    [{ id: 1, name: 'teste', description: '' }]
  );

}
class MockMainService {
  setProductInCart() {}
}
class MockStoreService {
  dispatch() {}
  select() {
    return of({ id: 1, name: 'teste', description: '' });
  }
}

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: ProductService, useClass: MockProductsService },
        { provide: MainService, useClass: MockMainService },
        { provide: Store, useClass: MockStoreService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called setProducts() in ngOnit', () => {
    const spy = spyOn(component, 'setProducts');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should be productList$  an observable when getProductList() is called', async () => {
    component.getProductList();
    component.productList$
    .subscribe(result => {
      expect(result).toEqual({ id: 1, name: 'teste', description: '' });
    });
  });

  it('should be lengthOfProducts 1 when setProducts() is called', async () => {
    component.setProducts();
    component.productList$
    .subscribe(result => {
      expect(component.lengthOfProducts).toEqual(1);
    });
  });

  it('should be store.dispatch called when setProducts() is called', async () => {
    const spy = spyOn(component.store, 'dispatch');
    component.setProducts();
    component.productList$
    .subscribe(result => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should be return array length equal 1', async () => {
    component.lengthOfProducts = 0;
    const result = component.getNumberOfPages();
    expect(result.length).toEqual(1);
  });

  it('should be return array length equal 2', async () => {
    component.lengthOfProducts = 16;
    component.numberOfProductsByPag = 8;
    const result = component.getNumberOfPages();
    expect(result.length).toEqual(2);
  });

  it('should belistPaginatorSlice() called inside in changeNumberPage()', async () => {
    const spy = spyOn(component, 'listPaginatorSlice');
     component.changeNumberPage(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should be return array length equal 2 when setProductByPage() is called', async () => {
    const product = [
      { id: 1, name: 'teste', description: 'mock' },
      { id: 2, name: 'teste', description: 'mock' },
      { id: 3, name: 'teste', description: 'mock' }
    ];
    component.actualNumber = 1;
    component.numberOfProductsByPag = 8;
    const result = component.setProductByPage(product as any);
    expect(result.length).toEqual(3);
  });

  it('should be setProductInCart called inside in getProductAdded()', async () => {
    const spy = spyOn(component.mainService, 'setProductInCart');
     component.getProductAdded({} as any);
    expect(spy).toHaveBeenCalled();
  });

  it('should be showProductOptions false when disableControlProductOptions() is called', async () => {
     component.disableControlProductOptions();
    expect(component.showProductOptions).toBe(false);
  });

  it('should be idSelected equal 5 when controlProductOptions is called', async () => {
    const event = {target: {id: '5'}};
    component.controlProductOptions(event);
   expect(component.idSelected).toBe('5');
 });

 it('should be showProductOptions equal true when controlProductOptions is called', async () => {
  const event = {target: {id: '5'}};
  component.controlProductOptions(event);
 expect(component.showProductOptions).toBe(true);
});

it('should be store.dispatch() called inside in setFavorite()', async () => {
  const spy = spyOn(component.store, 'dispatch');
   component.setFavorite([{}] as any, 1);
  expect(spy).toHaveBeenCalled();
});

it('should be favoriteId equal 5 called inside in setFavorite()', async () => {
  const spy = spyOn(component.store, 'dispatch');
   component.setFavorite([{}] as any, 1);
  expect(component.favoriteId).toBe(1);
});

it('should be store.dispatch() called inside in setCart()', async () => {
  const spy = spyOn(component.store, 'dispatch');
   component.setCart([{}] as any, 1);
  expect(spy).toHaveBeenCalled();
});






});


/* import { ProductsComponent } from './products.component';
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

class MainServiceMock {
  setProductInCart() {
    return of(mockProduct);
  }
}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let productsServiceMock: any;
  let mainServiceMock: any;

  beforeEach((() => {
    productsServiceMock = new ProductsServiceMock();
    mainServiceMock = new MainServiceMock();
    component = new ProductsComponent(productsServiceMock, mainServiceMock );
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

  it('should be add Produt', () => {
    const spy = spyOn(mainServiceMock, 'setProductInCart');
    const  mockProductUnic = {id:'1',name:'Generic Steel Towels',
      price:'660.00',
      photo:'http://lorempixel.com/640/480/cats'
    };
    component.getProductAdded(mockProductUnic as any);
    expect(spy).toHaveBeenCalled();
  });


});
 */