import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ObjectId } from 'bson';
import faker from '@faker-js/faker';
import Product from './Product';
import ProductType from '../../../types/Product';
import ProductProps from './types';

export default {
  title: 'Example/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = function Template({ product }: ProductProps) {
  return (
    <Product product={product} />
  );
};
export const Default = Template.bind({});
Default.args = {
  product: fake(),
};

export const LongName = Template.bind({});
LongName.args = {
  product: fake('longname'),
};

type FakeOptions = '' | 'longname';

/**
 * Generates a fake product
 */
function fake(option: FakeOptions = ''): ProductType {
  let productName = faker.commerce.product();
  if (option === 'longname') {
    productName = productName.repeat(10);
  }
  return {
    name: productName,
    _id: new ObjectId(),
  };
}
