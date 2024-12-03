import {chartReducer} from '@/features/telegramChart';
import {combineReducers} from '@reduxjs/toolkit';

export const createRootReducer = () =>
  combineReducers({
    ...chartReducer,
  });
