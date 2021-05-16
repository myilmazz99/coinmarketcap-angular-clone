import { CurrencyPipe, DecimalPipe } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import IndicatorsCore from 'highcharts/indicators/indicators';
import HC_exporting from 'highcharts/modules/exporting';
import { ChartData, ChartDataTabs } from '@coin-market/data';
HC_exporting(Highcharts);
IndicatorsCore(Highcharts);

@Component({
    selector: 'ui-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LineChartComponent implements OnInit, AfterViewInit {
    highcharts: typeof Highcharts;
    chart: Highcharts.Chart;
    chartOptions: Highcharts.Options;
    @Input() series: Highcharts.SeriesOptionsType[];
    @Input() legend: string[];
    @Input() tabs: ChartDataTabs[];
    @Input() data: ChartData;
    selectedTab: string;

    constructor(
        private decimalPipe: DecimalPipe,
        private currencyPipe: CurrencyPipe,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    getSelectedTab(val: string) {
        this.selectedTab = val;
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

    getChartInstance(chart: Highcharts.Chart) {
        this.chart = chart;
    }

    ngOnInit() {
        this.highcharts = Highcharts;
        const _this = this;

        const commonSeriesOptions = {
            states: {
                hover: { lineWidth: 2 },
            },
            label: { enabled: false },
        };

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
            yAxis: [
                {
                    id: 'usd',
                    labels: {
                        align: 'left',
                        x: 0,
                        formatter: function () {
                            return (
                                '$' + this.axis.defaultLabelFormatter.call(this)
                            );
                        },
                    },
                    gridLineColor: 'var(--border-color)',
                    opposite: false,
                    height: '80%',
                },
                {
                    id: 'coin',
                    labels: {
                        align: 'right',
                        x: 0,
                        formatter: function () {
                            const formattedValue = _this.decimalPipe.transform(
                                this.value,
                                '1.0-0'
                            );
                            return formattedValue + ' BTC';
                        },
                    },
                    gridLineColor: 'var(--border-color)',
                    height: '80%',
                },
                {
                    id: 'volume',
                    height: '20%',
                    top: '80%',
                    gridLineColor: 'var(--border-color)',
                    visible: false,
                },
            ],
            series: [
                {
                    name: 'USD',
                    color: 'rgb(22, 199, 132)',
                    type: 'line',
                    visible: true,
                    data: [...this.data.price.usd],
                    yAxis: 'usd',
                    tooltip: {
                        pointFormatter: function () {
                            return _this.generateTooltipTemplate(
                                this.y,
                                this.color as string
                            );
                        },
                    },
                    ...commonSeriesOptions,
                },
                {
                    name: 'BTC',
                    yAxis: 'coin',
                    color: 'rgb(255, 187, 31)',
                    type: 'line',
                    data: [...this.data.price.coin],
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
                },
                {
                    name: 'Vol 24h',
                    type: 'column',
                    data: [...this.data.volume],
                    color: 'rgb(207, 214, 228)',
                    yAxis: 'volume',
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
                },
            ],
            exporting: { enabled: false },
        };
    }
}
