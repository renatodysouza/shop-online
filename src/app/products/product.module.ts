import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]

})
export class ProductModule { }
