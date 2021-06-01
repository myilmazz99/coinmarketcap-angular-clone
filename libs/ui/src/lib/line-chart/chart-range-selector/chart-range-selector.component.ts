import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CalendarDateRange, ChartDateRange } from '@coin-market/data';
import * as Highcharts from 'highcharts/highstock';
import { subDays, subMonths, subYears, startOfYear } from 'date-fns';

@Component({
    selector: 'ui-chart-range-selector',
    templateUrl: './chart-range-selector.component.html',
    styleUrls: ['./chart-range-selector.component.scss'],
})
export class ChartRangeSelectorComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    @Input() selected: ChartDateRange;
    @Output() selectedChange = new EventEmitter<ChartDateRange>(null);

    private _chart: Highcharts.Chart;
    @Input() set chart(val: Highcharts.Chart) {
        if (val) {
            this._chart = val;
            this.setExtremes(this.selected.dateRange);
        }
    }

    ranges: ChartDateRange[] = [
        {
            value: '1D',
            dateRange: new CalendarDateRange(
                subDays(new Date(), 1),
                new Date()
            ),
        },
        {
            value: '7D',
            dateRange: new CalendarDateRange(
                subDays(new Date(), 7),
                new Date()
            ),
        },
        {
            value: '1M',
            dateRange: new CalendarDateRange(
                subMonths(new Date(), 1),
                new Date()
            ),
        },
        {
            value: '3M',
            dateRange: new CalendarDateRange(
                subMonths(new Date(), 3),
                new Date()
            ),
        },
        {
            value: '1Y',
            dateRange: new CalendarDateRange(
                subYears(new Date(), 1),
                new Date()
            ),
        },
        {
            value: 'YTD',
            dateRange: new CalendarDateRange(
                startOfYear(new Date()),
                new Date()
            ),
        },
        {
            value: 'ALL',
            dateRange: new CalendarDateRange(null, new Date()),
        },
    ];

    setSelected(val: ChartDateRange) {
        this.selected = val;
        this.selectedChange.emit(val);

        this.setExtremes(val.dateRange);
    }

    setCalendarDateRange(val: CalendarDateRange) {
        this.setSelected(new ChartDateRange({ value: 'CAL', dateRange: val }));
    }

    setExtremes(range: CalendarDateRange) {
        this._chart?.xAxis[0].setExtremes(
            range.start?.getTime(),
            range.end?.getTime()
        );
    }
}
