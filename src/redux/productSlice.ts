/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from 'bson';
import { WritableDraft } from 'immer/dist/internal';
import Product from '../types/Product';

interface ProductState {
  cart: Product[],
  total: number,
}

const initialState: ProductState = {
  cart: [],
  total: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    /**
     * Ajoute un produit dans le panier
     * @param state
     * @param action L'action fournie lors de l'appel de dispatch
     */
    add: (state, action: PayloadAction<Product>) => {
      const { payload } = action;
      state.cart.push(payload);
      state.total = totalPrice(state);
    },

    /**
     * Retire un produit du panier
     * @param state
     * @param action Contient l'id du produit à retirer du panier
     */
    remove: (state, action: PayloadAction<ObjectId>) => {
      state.cart = [...state.cart].filter(({ _id }) => _id !== action.payload);
      state.total = totalPrice(state);
    },
  },
});

function totalPrice(state: WritableDraft<ProductState>): number {
  return state.cart.reduce(
    ((previousValue, currentValue) => previousValue + currentValue.price),
    0,
  );
}

// Action creators are generated for each case reducer function
export const {
  add, remove,
} = productSlice.actions;

export default productSlice.reducer;
