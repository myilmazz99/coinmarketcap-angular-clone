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

    getChartInstance(chart: Highcharts.Chart) {
        this.chartInstanceEvent.emit(chart);
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
            series: [...this.series],
            exporting: { enabled: false },
        };
    }
}
