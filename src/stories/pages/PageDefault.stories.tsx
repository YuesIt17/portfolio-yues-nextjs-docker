import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {css} from '@emotion/react';
import {PageDefault} from '@/components';

export default {
  title: 'Example/Pages',
  component: PageDefault,
  argTypes: {},
} as ComponentMeta<typeof PageDefault>;

const Template: ComponentStory<typeof PageDefault> = (args) => (
  <PageDefault {...args} />
);

export const PageDefaultExample = Template.bind({});

PageDefaultExample.args = {
  title: 'Title page',
  children: <div>Text for page</div>,
  buttonText: 'Button text',
  //eslint-disable-next-line @typescript-eslint/no-empty-function
  buttonHandler: () => {},
  style: css({
    height: '100vh',
  }),
};
