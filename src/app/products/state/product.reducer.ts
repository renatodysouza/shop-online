import { Product } from './../product';
/* eslint-disable arrow-body-style */
import { createReducer, on,props, createAction } from '@ngrx/store'
import  * as ProductActions from './products.actions';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
    products: ProductState;
}

export interface ProductState {
    favorite: Product[];
    products: Product[];
    cart: Product[];
    numberOfProductSelect: number;
}

const initialState = {
    favorite: [],
    numberOfProductSelect: 0,
    products: [],
    cart: [],
};

export const productReduce = createReducer<ProductState>(
    initialState,
    on(ProductActions.setFavorite, (state, action: any): ProductState  => {
        console.log(state, action.product);
        return {
           ...state,
           favorite: [...state.favorite, action.product]
       };
    }),
    on(ProductActions.setProducts, (state, action: any): ProductState  => {
        return {
           ...state,
           products: [...action.products]
       };
    }),
    on(ProductActions.setCart, (state, action: any): ProductState  => {
        return {
           ...state,
           cart: [...state.cart, action.products]
       };
    })
);

