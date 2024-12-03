import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {TelegramChartLine} from '../../features/telegramChart/components';
import {COLOR_CHART_LINE_JOINED} from '../../share/constants';

export default {
  title: 'Example/TelegramChart',
  component: TelegramChartLine,
  argTypes: {},
} as ComponentMeta<typeof TelegramChartLine>;

const Template: ComponentStory<typeof TelegramChartLine> = (args) => (
  <TelegramChartLine {...args} />
);

export const TelegramChartLineExample = Template.bind({});

TelegramChartLineExample.args = {
  data: [
    {
      color: COLOR_CHART_LINE_JOINED,
      name: '#0',
      points: '0,200 60,600 210,110 300,300 400,200',
      type: 'line',
      pointsMap: '',
      isVisible: true,
    },
  ],
  maxDataX: 400,
  maxDataY: 600,
  labelsX: [
    {
      label: 'Nov 17',
      coordinate: 0,
    },
    {
      label: 'Nov 29',
      coordinate: 200,
    },
    {
      label: 'Dec 11',
      coordinate: 400,
    },
  ],
  labelsY: [
    {
      label: '150',
      coordinate: 450,
    },
    {
      label: '300',
      coordinate: 300,
    },
    {
      label: '450',
      coordinate: 150,
    },
  ],
  width: 350,
};
