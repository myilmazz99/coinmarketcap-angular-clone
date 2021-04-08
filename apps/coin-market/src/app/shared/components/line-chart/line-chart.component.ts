import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import IndicatorsCore from 'highcharts/indicators/indicators';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
IndicatorsCore(Highcharts);

@Component({
    selector: 'coin-market-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
    highcharts: typeof Highcharts;
    @Input() constructorType: string;
    @Input() series: Highcharts.SeriesOptionsType[];
    @Output() chartInstanceEvent = new EventEmitter<Highcharts.Chart>();

    chartOptions: Highcharts.Options;

    constructor(private decimalPipe: DecimalPipe) {}

    getChartInstance(chart: Highcharts.Chart) {
        this.chartInstanceEvent.emit(chart);
    }

    ngOnInit() {
        this.highcharts = Highcharts;
        const _this = this;

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
                    labels: {
                        align: 'left',
                        x: 0,
                        formatter: function () {
                            return (
                                '$' + this.axis.defaultLabelFormatter.call(this)
                            );
                        },
                    },
                    opposite: false,
                    height: '80%',
                },
                {
                    labels: {
                        align: 'right',
                        x: 0,
                        formatter: function () {
                            var formattedValue = _this.decimalPipe.transform(
                                this.value,
                                '1.0-0'
                            );
                            return formattedValue + ' BTC';
                        },
                    },
                    height: '80%',
                },
                {
                    height: '20%',
                    top: '80%',
                    visible: false,
                },
            ],
            series: [...this.series],
            exporting: { enabled: false },
        };
    }
}
