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


