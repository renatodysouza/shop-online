import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MainService } from '../main.service';
import { ProductService } from '../products/product.service';



class MockMainService {
  setProductInCart() {}
}
class MockStoreService {
  dispatch() {}
  select() {
    return of({ totalCart: '200' });
  }
}

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        RouterModule,
        SharedModule
      ],
      providers: [
        { provide: MainService, useClass: MockMainService },
        { provide: Store, useClass: MockStoreService },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called getCartProduct() in ngOnit', () => {
    const spy = spyOn(component, 'getCartProduct');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should be called getTotal() in ngOnit', () => {
    const spy = spyOn(component, 'getTotal');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should be totalCart$  an observable when getTotal() is called', async () => {
    component.getTotal();
    component.totalCart$
    .subscribe(result => {
      expect(result).toEqual('200');
    });
  });

  it('should begetPriceProduct return 100 when getPriceProduct() is called', async () => {
    const result = component.getPriceProduct(100, 0);
    expect(result).toEqual(100);
  });

  it('should begetPriceProduct return 100 when getPriceProduct() is called', async () => {
    const result = component.getPriceProduct(100, 0);
    expect(result).toEqual(100);
  });

  it('should be store.dispatch() called inside in incremmentQuantity()', async () => {
    const spy = spyOn(component.store, 'dispatch');
     component.incremmentQuantity(2, 0);
    expect(spy).toHaveBeenCalled();
  });

  it('should be setIndexQuantity() called inside in incremmentQuantity()', async () => {
    const spy = spyOn(component, 'setIndexQuantity');
     component.incremmentQuantity(2, 0);
    expect(spy).toHaveBeenCalled();
  });

  it('should be store.dispatch() called inside in decremmentQuantity()', async () => {
    const spy = spyOn(component.store, 'dispatch');
     component.decremmentQuantity(2, 0);
    expect(spy).toHaveBeenCalled();
  });

  it('should be store.dispatch() called inside in decremmentQuantity()', async () => {
    const spy = spyOn(component, 'setIndexQuantity');
     component.decremmentQuantity(2, 0);
    expect(spy).toHaveBeenCalled();
  });

  it('should be store.dispatch() called inside in deleteProduct()', async () => {
    const spy = spyOn(component.store, 'dispatch');
     component.deleteProduct({} as any);
    expect(spy).toHaveBeenCalled();
  });

});
