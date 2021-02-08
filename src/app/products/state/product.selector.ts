import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';


const getProduct = createFeatureSelector<ProductState>('products');
const getError = createFeatureSelector<ProductState>('products');

export const getProductList = createSelector(
    getProduct,
    state => state.products
);

export const getErrorProduct = createSelector(
    getError,
    state => state.error
);

export const getAddCartEvent = createSelector(
    getError,
    state => state.addCartEvent
);

