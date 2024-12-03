export type TColumnKeyValue = Record<string, string>;

export type TChartData = {
  columns: TColumnsValueAxis[];
  types: TColumnKeyValue;
  names: TColumnKeyValue;
  colors: TColumnKeyValue;
};

export type TColumnsValueAxis = (string | number)[];

export interface IResponseChart {
  id: number;
  data: TChartData;
}
