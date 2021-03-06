import { RouterModule } from '@angular/router';
import { ModalCartComponent } from './header/sub-header/modal-cart/modal-cart.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { SharedModule } from '../shared/shared.module';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent,
    SubHeaderComponent,
    ModalCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalCartComponent
  ]
})
export class CoreModule { }
