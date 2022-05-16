import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Error from './Error';

export default {
  title: 'Example/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = function Template() {
  return (
    <Error message="Il y a eu une erreur." />
  );
};

export const Default = Template.bind({});
