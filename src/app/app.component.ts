import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DxChartModule
} from 'devextreme-angular';
import { ISeriesData } from './models';
import { DataSource } from './datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chart-test';
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  chartSeries: ISeriesData[] = [];
  chartData: any[] = DataSource.data;

  constructor() {
    this.chartSeries = this.getChartSeries();
  }

  getChartSeries(): ISeriesData[] {
    let series: ISeriesData[] = [];

    const argumentField = "TimePart";

    series.push({
      argumentField,
      valueField: "SumVolume",
      name: "TimePeriod",
      argumentType: "string",
      valueType: "number",
      type: "spline",
    });

    return series;
  }
}
