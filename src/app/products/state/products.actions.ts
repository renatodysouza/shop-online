import { Product } from './../product';
import { createAction, props } from '@ngrx/store';

export const setFavorite = createAction(
  '[Product] favorite',
  props<{product: any}>()
);

export const setProducts = createAction(
    '[Products] favorite',
    props<{products: any}>()
);

export const setCart = createAction(
  '[Products] cart',
  props<{products: any}>()
);

export const deleteCart = createAction(
  '[Products] delete cart',
  props<{id: string}>()
);

export const getTotalCart = createAction(
  '[Products] total cart',
);

export const addQuantiCart = createAction(
  '[Products] quantity cart',
  props<{id: number}>()
);


export const decreQuantiCart = createAction(
  '[Products] decreQuantity cart',
  props<{cartId: number}>()
);


export const loadProducts = createAction(
  '[Products] loadProducts'
);

export const loadProductsSuccess = createAction(
  '[Products] loadProductsSuccess',
  props<{products: any}>()
);

export const loadProductsFailure = createAction(
  '[Products] loadProductsFailure',
  props<{error: any}>()
);

export const isAddProductInCart = createAction(
  '[Products] addProductInCart',
  props<{isAdd: boolean}>()
);
