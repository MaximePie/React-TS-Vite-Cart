import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from './Error';
import ErrorProps from './types';
import { Codes } from './data';

export default {
  title: 'Example/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = function Template({ code }: ErrorProps) {
  return (
    <Error code={code} />
  );
};

export const Default = Template.bind({});
Default.args = {
  code: Codes.Default,
};

export const LongError = Template.bind({});
LongError.args = {
  code: Codes.Long,
};
