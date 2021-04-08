import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import IndicatorsCore from 'highcharts/indicators/indicators';
import { Subscription } from 'rxjs';
import { OverviewService } from '../../shared/services/overview.service';
import HC_exporting from 'highcharts/modules/exporting';
import { ChartData } from '../../models/chart-data';
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
    chartData: ChartData;
    chartDataSubscription: Subscription;
    //data
    selected = 'Price';
    legend = ['USD', 'BTC'];

    switchData(val: string) {
        this.selected = val;
        const serie_usd = this.chart.series.find((s) => s.name === 'USD');
        const serie_coin = this.chart.series.find((s) => s.name === 'BTC');

        switch (val.toLowerCase()) {
            case 'price':
                serie_coin.update({ type: 'line', data: this.chartData.coin });
                serie_usd.update({ type: 'line', data: this.chartData.usd });
                break;

            case 'marketcap':
                serie_coin.update({
                    type: 'line',
                    data: this.chartData.marketCap.coin,
                });
                serie_usd.update({
                    type: 'line',
                    data: this.chartData.marketCap.usd,
                });
                break;
            default:
                break;
        }
    }

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
                  ? this.currencyPipe.transform(val, 'BTC', '', '1.0-6') +
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
                this.chartData = data;
                this.series.push({
                    name: 'USD',
                    color: 'rgb(22, 199, 132)',
                    type: 'line',
                    visible: true,
                    data: [...this.chartData.usd],
                    yAxis: 0,
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
                    name: 'BTC',
                    yAxis: 1,
                    color: 'rgb(255, 187, 31)',
                    type: 'line',
                    data: [...this.chartData.coin],
                    visible: false,
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
                    name: 'Vol 24h',
                    type: 'column',
                    data: [...data.volume],
                    color: 'rgb(207, 214, 228)',
                    yAxis: 2,
                    groupPadding: 0,
                    pointPadding: 0,
                    tooltip: {
                        pointFormatter: function () {
                            const value = this.y;
                            return _this.generateTooltipTemplate(
                                value,
                                this.color as string,
                                false,
                                'Vol 24h'
                            );
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
