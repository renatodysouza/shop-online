import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderTopComponent } from '../../header-top/header-top.component';
import { HeaderComponent } from '../../header.component';
import { SubHeaderComponent } from '../sub-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalCartComponent } from './modal-cart.component';


class MockStoreService {
  dispatch() { }
  select() {
    return of({ id: 1, name: 'teste', description: '' });
  }
}

describe('ModalCartComponent', () => {
  let component: ModalCartComponent;
  let fixture: ComponentFixture<ModalCartComponent>;

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
    fixture = TestBed.createComponent(ModalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
