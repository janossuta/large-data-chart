export interface IChartData {
  TimePart: string;
  DateStr: string;
  SumVolume: number;
  CompareSumVolume: number;
  CommodityName: string;
  Time: string;
}

export interface ISeriesData {
  argumentField: string;
  valueField: string;
  name: string;
  argumentType: string;
  valueType: string;
  type: string;
}
