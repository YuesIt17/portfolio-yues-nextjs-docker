import React from 'react';
import {TelegramChartPage} from '../pages/TelegramChartPage';

export default function TelegramChartLayout() {
  return <TelegramChartPage />;
}

TelegramChartLayout.requireAuth = true;
