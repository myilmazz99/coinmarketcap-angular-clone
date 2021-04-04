import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import * as Highcharts from "highcharts/highstock";

import IndicatorsCore from "highcharts/indicators/indicators";
import { ChartData } from '../../../models/chart-data';
IndicatorsCore(Highcharts);

@Component({
  selector: 'coin-market-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  highcharts: typeof Highcharts;
  @Input() constructorType: string;
  @Input() chartData: ChartData;
  @Input() callback;

  Chart: Highcharts.Chart;
  chartCallback: Highcharts.ChartCallbackFunction = (
    chart: Highcharts.Chart
  ) => {
    this.Chart = chart;
  };
  chartOptions: Highcharts.Options;

  //data
  selected = "Price";

  //legend
  legend = ["USD", "BTC"];


  constructor(public currencyPipe: CurrencyPipe) {
  }

  ngOnInit() {

    
    this.highcharts = Highcharts;

    this.chartOptions = {
      rangeSelector: {
        inputEnabled: false,
        enabled: false,
      },
      tooltip: {
        split: false,
        shared: true,
        useHTML: true,
        headerFormat: `<div class="highcharts-tooltip__line">
        <div class="highcharts-tooltip__line__body">{point.key}
        </div>
      </div>`,
      },
      series: [
        {
          id: "usd",
          type: "line",
          color: "var(--theme-color)",
          data: [...this.chartData.usd],
          name: "USD",
          tooltip: {
            pointFormatter: function () {
              return `
                      <div class="highcharts-tooltip__line">
                        <div class="highcharts-tooltip__line__header">
                          <div class="highcharts-tooltip__line__header__color" style="background:${
                            this.color
                          }">
                          </div>
                          Price:
                        </div>
                        <div class="highcharts-tooltip__line__body">
                         ${this.y}
                        </div>
                      </div>`;
            },
          },
          states: {
            hover: { lineWidth: 2 },
          },
          label: { enabled: false },
        },
        {
          id: "coin",
          visible: false,
          type: "line",
          color: "rgb(255, 187, 31)",
          data: [...this.chartData.coin],
          name: "BTC",
          tooltip: {
            pointFormatter: function () {
              return `<div class="highcharts-tooltip__line">
            <div class="highcharts-tooltip__line__header">
              <div class="highcharts-tooltip__line__header__color" style="background:${this.color}">
              </div>
              Price(${this.series.name}):
            </div>
            <div class="highcharts-tooltip__line__body">
             ${this.y} ${this.series.name}
            </div>
          </div>`;
            },
          },
          states: {
            hover: { lineWidth: 2 },
          },
          label: { enabled: false },
        },
      ],
    };
  }
}
