import {flowRight, join} from 'lodash';

export const joinValues = (values: string[], separator = ' ') =>
  join(values, separator);

export function parseDateTimeToInt(
  value: number,
  index: number,
  delta: number
) {
  const countDigit = value.toString().length;
  const rank = new Array(countDigit).fill(1).join('');
  return Math.round(Number(value) / Number(rank) + index * delta);
}

export const compose = flowRight;
