import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'ui-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
    @Input() trigger: MatMenuTrigger;
    @Output() dateRangeEvent = new EventEmitter<number[]>(null);
    @ViewChild(MatCalendar) matCalendar: MatCalendar<Date>;

    predefinedDates: number[] = [7, 30, 90, 180, 365]; //dates in days
    dateRange: number[] = [];
    calendar = { start: 0, end: 0, range: 0 };
    maxDate = new Date();

    setPredefinedDate(val: number) {
        this.closeMenu();

        const min = new Date().setHours(val * -24);
        const max = new Date().getTime();

        this.dateRangeEvent.emit([min, max]);
    }

    isSelected = (event?: Date) => {
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
        this.dateRangeEvent.emit([this.calendar.start, this.calendar.end]);
    }
}
