/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';
import * as ProductActions from './products.actions';


@Injectable()
export class ProductEffects {
    loadProducts$: any;
    constructor(
        private action$: Actions,
        private productService: ProductService
    ) {

        this.loadProducts$ = createEffect(() => {
            return this.action$.pipe(
                ofType(ProductActions.loadProducts),
                mergeMap(() => this.productService.products$
                .pipe(
                    map(products => ProductActions.loadProductsSuccess({products})),
                    catchError(err => of(ProductActions.loadProductsFailure({error: err.message})))
                ))
            );
        });
    }
 }
