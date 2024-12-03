import {COLOR_CHART_LINE_JOINED} from '../../share/constants';
import {
  getColumnData,
  getPrepareDataAxisX,
  getPrepareDataAxisY,
  mapPointCoordinates,
  prepareData,
} from './prepareData';
import {
  TChartDataLabel,
  TChartDataLine,
  TColumnValue,
  TCoordinatePoint,
} from '../types';
import {mockChartData} from '@/share/mockDataTest';

describe('Prepare data for chart', () => {
  test('Check prepare data', () => {
    const outputData = {
      lines: [
        {
          color: COLOR_CHART_LINE_JOINED,
          name: '#0',
          points: '1,0 6,17',
          pointsMap: '1,0 6,3',
          type: 'line',
          isVisible: true,
        },
      ] as TChartDataLine[],
      maxDataX: 11,
      maxDataY: 37,
      labelsX: [
        {
          label: 'Nov 17',
          coordinate: 1,
        },
      ] as TChartDataLabel[],
      labelsY: [
        {
          label: '60',
          coordinate: 23,
        },
      ] as TChartDataLabel[],
    };

    expect(prepareData(mockChartData)).toEqual(outputData);
  });

  test('Check get column data', () => {
    const columnData = {
      columnDataY: [
        {
          color: COLOR_CHART_LINE_JOINED,
          name: '#0',
          type: 'line',
          values: [37, 20],
        },
      ],
      dataValuesX: [1542412800000, 1542499200000],
    };

    expect(getColumnData(mockChartData)).toEqual(columnData);
  });

  test('Check get prepare data axis x', () => {
    const dataValuesX = [1542412800000, 1542499200000];
    const dataAxisX = {
      coordinatesX: [1, 6],
      labelsX: [
        {
          coordinate: 1,
          label: 'Nov 17',
        },
      ] as TChartDataLabel[],
      maxDataX: 11,
    };

    expect(getPrepareDataAxisX(dataValuesX)).toEqual(dataAxisX);
  });

  test('Check get prepare data axis y', () => {
    const columnDataY = [
      {
        color: COLOR_CHART_LINE_JOINED,
        name: '#0',
        type: 'line',
        values: [37, 20],
      },
    ] as TColumnValue[];

    const dataAxisY = {
      labelsY: [
        {
          coordinate: 23,
          label: '60',
        },
      ],
      maxDataY: 37,
    };

    expect(getPrepareDataAxisY(columnDataY)).toEqual(dataAxisY);
  });

  test('Check map point coordinates with delta Y', () => {
    const points = [
      {
        x: 1,
        y: 2,
      },
      {
        x: 2,
        y: 3,
      },
    ] as TCoordinatePoint[];

    expect(mapPointCoordinates(points, 2)).toEqual(['1,1', '2,2']);
  });

  test('Check map point coordinates without delta Y', () => {
    const points = [
      {
        x: 1,
        y: 2,
      },
      {
        x: 2,
        y: 3,
      },
    ] as TCoordinatePoint[];

    expect(mapPointCoordinates(points)).toEqual(['1,2', '2,3']);
  });
});
