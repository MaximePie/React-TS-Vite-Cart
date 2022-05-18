import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Product from './Product';
import ProductProps from './types';
import { fake } from '../../../utils/product';

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
