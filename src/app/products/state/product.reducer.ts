import { Product } from './../product';
/* eslint-disable arrow-body-style */
import { createReducer, on,props, createAction } from '@ngrx/store';
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
    totalCart: string;
    error: string;
    addCartEvent: boolean;
}

const initialState = {
    favorite: [],
    numberOfProductSelect: 0,
    products: [],
    error: '',
    cart: [],
    totalCart: '0',
    addCartEvent: false

};

export const productReduce = createReducer<ProductState>(
    initialState,
    on(ProductActions.setFavorite, (state, action: any): ProductState  => {
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
    }),

    on(ProductActions.deleteCart, (state, action: any): ProductState  => {
        let total = 0;
        const newCart = state.cart.filter(cartItem => cartItem.id !== action.id );
        newCart.map(cartItem => total += parseFloat(cartItem.price));
        return {
           ...state,
           cart: [...newCart],
           totalCart: total.toFixed(2)
       };
    }),

    on(ProductActions.getTotalCart, (state, action: any): ProductState  => {
        let total = 0;
        state.cart.map(cartItem => total += parseFloat(cartItem.price));
        return {
           ...state,
           totalCart: total.toFixed(2)

       };
    }),
    on(ProductActions.addQuantiCart, (state, action: any): ProductState  => {
        let valueOfProduct;
        state.cart.map(cartItem => {
            if (cartItem.id === action.id) {
                valueOfProduct = parseFloat(cartItem.price);
            }
        });
        valueOfProduct = parseFloat(state.totalCart) + valueOfProduct;
        return {
           ...state,
           totalCart: valueOfProduct.toFixed(2)
       };
    }),

    on(ProductActions.decreQuantiCart, (state, action: any): ProductState  => {
        let valueOfProduct;
        state.cart.map(cartItem => {
            if (cartItem.id === action.cartId.id) {
                valueOfProduct = parseFloat(cartItem.price);
            }
        });
        valueOfProduct = parseFloat(state.totalCart) - valueOfProduct;
        return {
           ...state,
           totalCart: valueOfProduct.toFixed(2)
       };
    }),

    on(ProductActions.loadProducts, (state, action: any): ProductState  => {
        return {
           ...state,
           totalCart: ''
       };
    }),
    on(ProductActions.loadProductsSuccess, (state, action: any): ProductState  => {
        return {
           ...state,
           products: [...state.products, ...action.products]

       };
    }),

    on(ProductActions.loadProductsFailure, (state, action: any): ProductState  => {
        return {
           ...state,
           error: action.error
       };
    }),

    on(ProductActions.isAddProductInCart, (state, action: any): ProductState  => {
        return {
           ...state,
           addCartEvent: action.isAdd

       };
    })
);

