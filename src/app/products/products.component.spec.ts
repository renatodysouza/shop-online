import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [
        HttpClientTestingModule,
        FontAwesomeModule
      ],
      providers: [ProductService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
