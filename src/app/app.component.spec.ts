import { HeaderComponent } from './layout/header/header.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        ProductsComponent
      ],
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
