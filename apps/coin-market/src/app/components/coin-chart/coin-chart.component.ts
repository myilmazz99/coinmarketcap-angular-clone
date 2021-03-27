import { CurrencyPipe } from "@angular/common";
import { Component } from "@angular/core";
import * as Highcharts from "highcharts/highstock";

import IndicatorsCore from "highcharts/indicators/indicators";
IndicatorsCore(Highcharts);

@Component({
  selector: "coin-chart",
  styleUrls: ["./coin-chart.component.scss"],
  templateUrl: "./coin-chart.component.html",
})
export class CoinChartComponent {
  Highcharts: typeof Highcharts;
  constructorType: string;
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

  chartData = { usd: [], coin: [] };

  constructor(private currencyPipe: CurrencyPipe) {
    this.Highcharts = Highcharts;
    this.constructorType = "stockChart";

    for (var i = 500; i > 0; i--) {
      var day = new Date().getDate();
      this.chartData.usd.push([
        new Date().setDate(day - i),
        Math.floor(Math.random() * 100000 + 1),
      ]);
      this.chartData.coin.push([new Date().setDate(day - i), 1]);
    }

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
          color: "rgb(56, 97, 251)",
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
                         ${currencyPipe.transform(
                           this.y,
                           "USD",
                           "symbol",
                           "1.6-6"
                         )}
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
