import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {TelegramChartMap} from '../../features/telegramChart/containers';
import {COLOR_CHART_LINE_JOINED} from '../../share/constants';

export default {
  title: 'Example/TelegramChart',
  component: TelegramChartMap,
  argTypes: {},
} as ComponentMeta<typeof TelegramChartMap>;

const Template: ComponentStory<typeof TelegramChartMap> = (args) => (
  <TelegramChartMap {...args} />
);

export const TelegramChartLineMapExample = Template.bind({});

TelegramChartLineMapExample.args = {
  data: [
    {
      color: COLOR_CHART_LINE_JOINED,
      name: '#0',
      points: '',
      type: 'line',
      pointsMap: '0,40 60,100 210,20 300,60 400,40',
      isVisible: true,
    },
  ],
  maxDataX: 400,
  maxDataY: 600,
  width: 350,
};
