import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AuthActions} from '../../features/auth/containers/AuthActions';
import {Layout} from '@/components';

export default {
  title: 'Example/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const LayoutExample: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

LayoutExample.args = {
  actions: <AuthActions />,
  children: (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      Layout content
    </div>
  ),
};
