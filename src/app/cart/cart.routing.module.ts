import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';




const appRoutes: Routes = [
    { path: 'cart', component: CartComponent },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class CartRoutingModule { }
