import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider, useDispatch } from 'react-redux';
import Cart from './Cart';
import { fakeMany } from '../../../utils/product';
import store from '../../../redux/store';
import { add } from '../../../redux/productSlice';

export default {
  title: 'Example/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>;

function FakeProducts() {
  const products = fakeMany(3);
  const dispatch = useDispatch();

  return (
    <>
      {products.map((product) => (
        <button
          type="button"
          onClick={() => dispatch(add(product))}
        >
          {product.name}
        </button>
      ))}
    </>
  );
}

const Template: ComponentStory<typeof Cart> = function Template() {
  return (
    <Provider store={store}>
      <FakeProducts />
      <Cart />
    </Provider>
  );
};
export const Empty = Template.bind({});
