import {Input} from '@/components';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputExample = Template.bind({});

InputExample.args = {};
