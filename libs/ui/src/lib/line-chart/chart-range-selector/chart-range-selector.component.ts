import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DateRange } from '@coin-market/data';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'ui-chart-range-selector',
    templateUrl: './chart-range-selector.component.html',
    styleUrls: ['./chart-range-selector.component.scss'],
})
export class ChartRangeSelectorComponent {
    @Input() chart: Highcharts.Chart;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    ranges = ['1D', '7D', '1M', '3M', '1Y', 'YTD', 'ALL'];
    selected = 'ALL';

    setExtremesByCalendar(val: DateRange) {
        this.chart.xAxis[0].setExtremes(val.start.getTime(), val.end.getTime());
    }

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
                    true
                );
                break;
            case '7D':
                this.chart.xAxis[0].setExtremes(
                    now.setHours(-7 * 24),
                    new Date().getTime(),
                    true
                );
                break;
            case '1M':
                this.chart.xAxis[0].setExtremes(
                    now.setMonth(month - 1),
                    new Date().getTime(),
                    true
                );
                break;
            case '3M':
                this.chart.xAxis[0].setExtremes(
                    now.setMonth(month - 3),
                    new Date().getTime(),
                    true
                );
                break;
            case '1Y':
                this.chart.xAxis[0].setExtremes(
                    now.setFullYear(year - 1),
                    new Date().getTime(),
                    true
                );
                break;
            case 'YTD':
                this.chart.xAxis[0].setExtremes(
                    new Date(year, 0, 1).getTime(),
                    undefined,
                    true
                );
                break;

            default:
                this.chart.xAxis[0].setExtremes();
                break;
        }
    }
}
