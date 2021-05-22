import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { MatCalendar, DateRange } from '@angular/material/datepicker';

@Component({
    selector: 'ui-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
    @Input() selectedRange: DateRange<Date> = new DateRange(null, null);
    @Output() dateRangeEvent = new EventEmitter<DateRange<Date>>(null);
    @Output() closeMenuEvent = new EventEmitter(null);
    @ViewChild(MatCalendar) matCalendar: MatCalendar<Date>;

    predefinedDates: number[] = [7, 30, 90, 180, 365]; //dates in days
    maxDate = new Date();
    range = 0;

    setPredefinedDate(val: number) {
        // this.calendar.start = new Date().setHours(val * -24);
        // this.calendar.end = new Date().getTime();
        this.selectedRange = new DateRange(
            new Date(new Date().setHours(val * -24)),
            new Date()
        );

        this.onConfirm();
    }

    select(event: Date) {
        const { start, end } = this.selectedRange;

        if (start && end) this.selectedRange = new DateRange(null, null);

        if (!start) {
            this.selectedRange = new DateRange(event, null);
        } else if (!end && event > start) {
            this.selectedRange = new DateRange(this.selectedRange.start, event);
            this.range = Math.floor(
                (this.selectedRange.end.getTime() -
                    this.selectedRange.start.getTime()) /
                    86400000
            ); //sets range between dates in days
        } else {
            this.range = 0;
            this.selectedRange = new DateRange(event, null);
        }
    }

    closeMenu() {
        this.closeMenuEvent.emit();
    }

    onConfirm() {
        this.closeMenu();
        this.emitChanges();
    }

    emitChanges() {
        this.dateRangeEvent.emit(this.selectedRange);
    }
}
