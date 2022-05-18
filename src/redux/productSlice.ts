/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from 'bson';
import Product from '../types/Product';

interface ProductState {
  value: number,
  cart: Product[],
}

const initialState: ProductState = {
  value: 0,
  cart: [],
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
    },

    /**
     * Retire un produit du panier
     * @param state
     * @param action Contient l'id du produit à retirer du panier
     */
    remove: (state, action: PayloadAction<ObjectId>) => {
      state.cart = [...state.cart].filter(({ _id }) => _id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  add, remove,
} = productSlice.actions;

export default productSlice.reducer;
