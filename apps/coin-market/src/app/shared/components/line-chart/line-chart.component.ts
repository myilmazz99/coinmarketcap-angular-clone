import { Component, Input, OnInit } from '@angular/core';
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
    @Input() callback: Highcharts.ChartCallbackFunction;
    @Input() series: Highcharts.SeriesOptionsType[];

    chartOptions: Highcharts.Options;

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
            series: [...this.series],
        };
    }
}
