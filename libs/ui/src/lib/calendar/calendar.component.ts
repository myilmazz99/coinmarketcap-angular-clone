import {
    Component,
    EventEmitter,
    Output,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateRange } from '../models/date-range.model';

@Component({
    selector: 'ui-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
    @Output() dateRangeEvent = new EventEmitter<DateRange>(null);
    @Output() closeMenuEvent = new EventEmitter(null);
    @ViewChild(MatCalendar) matCalendar: MatCalendar<Date>;

    predefinedDates: number[] = [7, 30, 90, 180, 365]; //dates in days
    calendar: DateRange = { start: 0, end: 0, range: 0 };
    maxDate = new Date();

    setPredefinedDate(val: number) {
        this.calendar.start = new Date().setHours(val * -24);
        this.calendar.end = new Date().getTime();

        this.onConfirm();
    }

    //Mat-Calendar calls this function after selecting and sets returned string as class on proper element
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
            range = Math.floor((end - start) / 86400000); //sets range between dates in days
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
        this.closeMenuEvent.emit();
    }

    onConfirm() {
        this.closeMenu();
        this.emitChanges();
    }

    emitChanges() {
        this.dateRangeEvent.emit(this.calendar);
    }
}
