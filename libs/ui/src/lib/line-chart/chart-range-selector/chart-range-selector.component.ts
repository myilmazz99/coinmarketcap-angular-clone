import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'chart-range-selector',
    templateUrl: './chart-range-selector.component.html',
    styleUrls: ['./chart-range-selector.component.scss'],
})
export class ChartRangeSelectorComponent {
    ranges = ['1D', '7D', '1M', '3M', '1Y', 'YTD', 'ALL'];
    selected = 'ALL';

    @Input() chart: Highcharts.Chart;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    setExtremes(val: string) {
        this.selected = val;
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        switch (val) {
            case '1D':
                this.chart.xAxis[0].setExtremes(
                    now.setHours(-24),
                    new Date().getTime(),
                    true,
                    false
                );
                break;
            case '7D':
                this.chart.xAxis[0].setExtremes(
                    now.setHours(-7 * 24),
                    new Date().getTime(),
                    true,
                    false
                );
                break;
            case '1M':
                this.chart.xAxis[0].setExtremes(
                    now.setMonth(month - 1),
                    new Date().getTime(),
                    true,
                    false
                );
                break;
            case '3M':
                this.chart.xAxis[0].setExtremes(
                    now.setMonth(month - 3),
                    new Date().getTime(),
                    true,
                    false
                );
                break;
            case '1Y':
                this.chart.xAxis[0].setExtremes(
                    now.setFullYear(year - 1),
                    new Date().getTime(),
                    true,
                    false
                );
                break;
            case 'YTD':
                this.chart.xAxis[0].setExtremes(
                    new Date(year, 0, 1).getTime(),
                    undefined,
                    true,
                    false
                );
                break;

            default:
                this.chart.xAxis[0].setExtremes();
                break;
        }
    }
}
