import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent, loadChildren: './products/product.module#ProductModule' },
  { path: 'cart', component: CartComponent, loadChildren: './cart/cart.module#CartModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


