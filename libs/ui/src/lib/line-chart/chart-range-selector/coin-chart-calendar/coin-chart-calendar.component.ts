import { Component, Input, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'coin-chart-calendar',
    templateUrl: './coin-chart-calendar.component.html',
    styleUrls: ['./coin-chart-calendar.component.scss'],
})
export class CoinChartCalendarComponent {
    @Input() chart: Highcharts.Chart;
    @Input() trigger: MatMenuTrigger;
    @ViewChild(MatCalendar) matCalendar;

    predefinedDates = [7, 30, 90, 180, 365];
    calendar = { start: 0, end: 0, range: 0 };
    maxDate = new Date();

    isSelected = (event?: any) => {
        const date = event?.getTime();
        const { start, end } = this.calendar;

        if (start === date || end === date) return 'selected';
        if (start && end && start < date && date < end) return 'in-range';
    };

    select(event: Date) {
        const date = event.getTime();
        let { start, end, range } = this.calendar;

        if (start === 0) start = date;
        else if (end === 0 && date > start) {
            end = date;
            range = Math.floor((end - start) / 86400000);
        } else {
            start = date;
            end = 0;
            range = 0;
            this.resetSelections();
        }
        this.calendar = { start, end, range };

        this.matCalendar.updateTodaysDate();
    }

    resetSelections() {
        this.isSelected();
    }

    closeMenu() {
        this.trigger.closeMenu();
    }

    onConfirm() {
        this.closeMenu();
        this.chart.xAxis[0].setExtremes(this.calendar.start, this.calendar.end);
    }

    handlePredefinedDates(val: number) {
        this.closeMenu();
        const date = new Date().setHours(val * -24);
        this.chart.xAxis[0].setExtremes(date, new Date().getTime());
    }
}
