import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';

export default {
  title: 'Example/Navbara',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = function Template() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
