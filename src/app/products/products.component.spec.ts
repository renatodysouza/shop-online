import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import {  StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { MainService } from '../main.service';
import { ProductService } from './product.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


class MockProductsService {
  products$ = of(
    [{ id: 1, name: 'teste', description: '' }]
  );

}
class MockMainService {
  setProductInCart() { }
}
class MockStoreService {
  dispatch() { }
  select() {
    return of({ id: 1, name: 'teste', description: '' });
  }
}

describe('ProductsComponent', () => {
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
    const event = { target: { id: '5' } };
    component.controlProductOptions(event);
    expect(component.idSelected).toBe('5');
  });

  it('should be showProductOptions equal true when controlProductOptions is called', async () => {
    const event = { target: { id: '5' } };
    component.controlProductOptions(event);
    expect(component.showProductOptions).toBe(true);
  });

  it('should be store.dispatch() called inside in setCart()', async () => {
    const spy = spyOn(component.store, 'dispatch');
    component.setCart([{}] as any, 1);
    expect(spy).toHaveBeenCalled();
  });

});
