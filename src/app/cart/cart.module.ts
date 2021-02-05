import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    CartComponent
  ]

})
export class CartModule { }

