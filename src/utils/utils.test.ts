import {DELTA_DATE_TIME_TO_INT} from './constants';
import {compose, joinValues, parseDateTimeToInt} from '@/utils/utils';

describe('Test utils', () => {
  test('Check parse format date time to int', () => {
    expect(parseDateTimeToInt(1542412800000, 1, DELTA_DATE_TIME_TO_INT)).toBe(
      6
    );
  });

  test('Check join values', () => {
    expect(joinValues(['h', 'e', 'l', 'l', 'o'], '')).toBe('hello');
  });

  test('Check join compose', () => {
    const testToUpper = (value: string) => value.toLocaleUpperCase();
    const testToJoin = (values: string[]) => joinValues(values, '');
    const testCompose = compose([testToUpper, testToJoin]);

    expect(testCompose(['h', 'e', 'l', 'l', 'o'])).toBe('HELLO');
  });
});
