import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';





const appRoutes: Routes = [
    { path: 'product', component: ProductsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
