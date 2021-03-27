import { Component } from "@angular/core";
import * as Highcharts from "highcharts/highstock";

import IndicatorsCore from "highcharts/indicators/indicators";
import { numToUsd } from "../../helpers/numToUsd";
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

  constructor() {
    this.Highcharts = Highcharts;
    this.constructorType = "stockChart";

    for (var i = 500; i > 0; i--) {
      var day = new Date().getDate();
      this.chartData.usd.push([
        new Date().setDate(day - i),
        Math.floor(Math.random() * 1000 + 1),
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
        headerFormat: "",
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
              const usd = numToUsd().format(this.y);
              return `<b>${new Date(this.x)}</b> <br/>  Price: <b>$ ${usd}</b>`;
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
            pointFormat: `<br/>  Price({series.name}): <b>{point.y} {series.name}</b>`,
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
