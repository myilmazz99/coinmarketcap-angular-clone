import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import IndicatorsCore from 'highcharts/indicators/indicators';
import { Subscription } from 'rxjs';
import { OverviewService } from '../../shared/services/overview.service';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
IndicatorsCore(Highcharts);

@Component({
    selector: 'coin-chart',
    styleUrls: ['./coin-chart.component.scss'],
    templateUrl: './coin-chart.component.html',
})
export class CoinChartComponent implements OnInit, OnDestroy {
    chart: Highcharts.Chart;
    series: Highcharts.SeriesOptionsType[] = [];

    //data
    selected = 'Price';

    //legend
    legend = ['USD', 'BTC'];

    chartDataSubscription: Subscription;

    getChartInstance(chart: Highcharts.Chart) {
        this.chart = chart;
    }

    generateTooltipTemplate(
        val: number,
        headerColor: string = 'rgb(207, 214, 228)',
        isCoin: boolean = false,
        headerTitle: string = 'Price'
    ) {
        return `
        <div class="highcharts-tooltip__line">
          <div class="highcharts-tooltip__line__header">
            <div class="highcharts-tooltip__line__header__color" style="background:${headerColor}">
            </div>
            ${headerTitle}${isCoin ? `(BTC)` : ''}: 
          </div>
          <div class="highcharts-tooltip__line__body">
          ${
              isCoin
                  ? this.currencyPipe.transform(val, 'BTC', '', '1.2-6') +
                    ' BTC'
                  : this.currencyPipe.transform(val, 'USD', 'symbol', '1.0-6')
          }
          </div>
        </div>`;
    }

    constructor(
        private currencyPipe: CurrencyPipe,
        private overviewService: OverviewService
    ) {}

    ngOnInit(): void {
        const _this = this; //points to class
        const commonSeriesOptions = {
            states: {
                hover: { lineWidth: 2 },
            },
            label: { enabled: false },
        };
        this.chartDataSubscription = this.overviewService.chartData$.subscribe(
            (data) => {
                this.series.push({
                    id: 'usd',
                    name: 'USD',
                    color: 'rgb(22, 199, 132)',
                    type: 'line',
                    visible: true,
                    data: [...data.usd],
                    tooltip: {
                        pointFormatter: function () {
                            return _this.generateTooltipTemplate(
                                this.y,
                                this.color as string
                            );
                        },
                    },
                    ...commonSeriesOptions,
                });
                this.series.push({
                    id: 'BTC',
                    name: 'BTC',
                    color: 'rgb(255, 187, 31)',
                    type: 'line',
                    visible: false,
                    data: [...data.coin],
                    tooltip: {
                        pointFormatter: function () {
                            return _this.generateTooltipTemplate(
                                this.y,
                                this.color as string,
                                true
                            );
                        },
                    },
                    ...commonSeriesOptions,
                });
                this.series.push({
                    id: 'vol',
                    name: 'Vol 24h',
                    type: 'column',
                    visible: false,
                    data: [...data.volume],
                    tooltip: {
                        pointFormatter: function () {
                            const value = this.y;
                            return _this.generateTooltipTemplate(value);
                        },
                    },
                    ...commonSeriesOptions,
                });
            }
        );
    }

    ngOnDestroy(): void {
        this.chartDataSubscription.unsubscribe();
    }
}
