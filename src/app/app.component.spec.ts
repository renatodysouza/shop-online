import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        RouterTestingModule,
        CoreModule,
        SharedModule,
        ProductModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument(
          { maxAge: 25, logOnly: environment.production }
        ),
        EffectsModule.forRoot([]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });



});
