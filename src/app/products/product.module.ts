import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { productReduce } from './state/product.reducer';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    StoreModule.forFeature('products', productReduce)
  ],
  exports: [
    ProductsComponent
  ]

})
export class ProductModule { }
