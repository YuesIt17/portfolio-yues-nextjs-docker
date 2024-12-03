import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CheckBox} from '@/components';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    color: {control: 'color'},
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const CheckBoxExample = Template.bind({});

CheckBoxExample.args = {
  color: 'red',
  label: 'Label',
  name: 'fieldName',
  value: true,
};
