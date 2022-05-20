import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const storedReduxState = localStorage.getItem('reduxState');
let persistedState = {};
if (storedReduxState) {
  persistedState = JSON.parse(storedReduxState);
}

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>
export default store;
