import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderTopComponent } from '../header-top/header-top.component';
import { HeaderComponent } from '../header.component';
import { ModalCartComponent } from './modal-cart/modal-cart.component';

import { SubHeaderComponent } from './sub-header.component';

class MockStoreService {
  dispatch() { }
  select() {
    return of({ id: 1, name: 'teste', description: '' });
  }
}

describe('SubHeaderComponent', () => {
  let component: SubHeaderComponent;
  let fixture: ComponentFixture<SubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        FooterComponent,
        HeaderTopComponent,
        SubHeaderComponent,
        ModalCartComponent
      ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Store, useClass: MockStoreService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
