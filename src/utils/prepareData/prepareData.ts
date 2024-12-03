import {forEach, map, max, reduce, round} from 'lodash';
import {TChartData, TColumnsValueAxis} from '../../api/telegramChart/types';
import {
  CHART_DELTA_MAP_Y,
  SPACE_BETWEEN_LABEL_X,
  SPACE_BETWEEN_LABEL_Y,
} from '../../features/telegramChart/constants';
import {DELTA_DATE_TIME_TO_INT} from '../constants';
import {
  TChartDataLabel,
  TChartPrepareData,
  TColumnValue,
  TCoordinatePoint,
} from '../types';
import {compose, joinValues, parseDateTimeToInt} from '@/utils/utils';

export function getColumnData(data: TChartData) {
  let dataValuesX: TColumnsValueAxis = [];
  const columnDataY: TColumnValue[] = [];

  const columnTypes = data.types;
  const columnNames = data.names;
  const columnColors = data.colors;

  forEach(data.columns, ([key, ...values]) => {
    const column: TColumnValue = {
      values: [...values],
      type: columnTypes[key],
      name: columnNames[key],
      color: columnColors[key],
    };
    if (key === 'x') {
      dataValuesX = column.values;
    } else {
      columnDataY.push(column);
    }
  });

  return {dataValuesX, columnDataY};
}

export function getPrepareDataAxisX(dataValuesX: TColumnsValueAxis) {
  const coordinatesX: number[] = [];
  const labelsX: TChartDataLabel[] = [];
  let maxDataX = 0;

  if (dataValuesX?.length > 0) {
    maxDataX = parseDateTimeToInt(
      max(dataValuesX.map((x) => Number(x))) || 0,
      dataValuesX.length,
      DELTA_DATE_TIME_TO_INT
    );
    const countLabelX = round(maxDataX / SPACE_BETWEEN_LABEL_X);
    const indexRangeX = round(dataValuesX.length / countLabelX);

    forEach(dataValuesX, (item, index) => {
      const x = parseDateTimeToInt(Number(item), index, DELTA_DATE_TIME_TO_INT);
      const remainderX = index % indexRangeX;

      if (index === 0 || remainderX === 0) {
        const dataX = new Date(item);
        const labelX: TChartDataLabel = {
          label: dataX.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
          }),
          coordinate: x,
        };
        if (!labelsX.includes(labelX)) labelsX.push(labelX);
      }
      coordinatesX.push(x);
    });
  }

  return {coordinatesX, labelsX, maxDataX};
}

export function getPrepareDataAxisY(columnDataY: TColumnValue[]) {
  const maxDataY = round(
    max(map(columnDataY, (item) => max(map(item.values, (y) => Number(y))))) ||
      0
  );
  const countLabelY = round(maxDataY / SPACE_BETWEEN_LABEL_Y);
  const initValues = new Array(countLabelY).fill(SPACE_BETWEEN_LABEL_Y);

  const addValueLabels = (labels: []) =>
    reduce(
      labels,
      (result: number[], currentItem: number, currentIndex) => {
        const prevItem = currentIndex > 0 ? result[currentIndex - 1] : 0;
        const newItem = currentItem + prevItem;

        if (newItem < maxDataY || newItem <= SPACE_BETWEEN_LABEL_Y) {
          result.push(newItem);
        }

        return result;
      },
      []
    );

  const mapLabelCoordinates = (labels: []) =>
    map(labels, (item: number) => ({
      label: item.toString(),
      coordinate: Math.abs(maxDataY - item),
    }));

  const composeDataLabel = compose([mapLabelCoordinates, addValueLabels]);

  const labelsY: TChartDataLabel[] = composeDataLabel(initValues);

  return {labelsY, maxDataY};
}

export const mapPointCoordinates = (
  points: TCoordinatePoint[],
  deltaY?: number
) =>
  map(points, (element) => {
    const x = element.x;
    const y = deltaY ? Math.round(element.y / deltaY) : element.y;
    return `${x},${y}`;
  });

export function prepareData(data: TChartData): TChartPrepareData {
  const {dataValuesX, columnDataY} = getColumnData(data);

  const {coordinatesX, labelsX, maxDataX} = getPrepareDataAxisX(dataValuesX);
  const {labelsY, maxDataY} = getPrepareDataAxisY(columnDataY);

  const coordinates = map(columnDataY, (item) => {
    const {values, ...data} = item;
    const points: TCoordinatePoint[] = map(values, (value, index) => {
      return {
        x: coordinatesX[index],
        y: maxDataY - Number(value),
      };
    });

    return {
      ...data,
      points: [...points],
    };
  });

  const composeCoordinates = compose([joinValues, mapPointCoordinates]);

  const lines = map(coordinates, (item) => {
    const {points, ...data} = item;
    return {
      points: composeCoordinates(points),
      pointsMap: composeCoordinates(points, CHART_DELTA_MAP_Y),
      ...data,
      isVisible: true,
    };
  });

  return {lines, maxDataX, maxDataY, labelsX, labelsY};
}
