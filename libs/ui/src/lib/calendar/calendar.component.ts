import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatCalendar, DateRange } from '@angular/material/datepicker';
import { CalendarDateRange } from '@coin-market/data';

@Component({
    selector: 'ui-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnChanges {
    @Input() selectedRange: CalendarDateRange = new CalendarDateRange();
    @Output() dateRangeEvent = new EventEmitter<CalendarDateRange>(null);
    @Output() closeMenuEvent = new EventEmitter(null);
    @ViewChild(MatCalendar) matCalendar: MatCalendar<Date>;
    selected: DateRange<Date> = new DateRange(null, null);

    predefinedDates: number[] = [7, 30, 90, 180, 365]; //dates in days
    maxDate = new Date();
    range = 0;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedRange.currentValue) {
            const { start, end } = changes.selectedRange.currentValue;
            this.selected = new DateRange(start, end);
        }
    }

    setPredefinedDate(val: number) {
        this.selected = new DateRange(
            new Date(new Date().setHours(val * -24)),
            new Date()
        );

        this.onConfirm();
    }

    select(event: Date) {
        const { start, end } = this.selected;

        if (start && end) this.selected = new DateRange(null, null);

        if (!start) {
            this.selected = new DateRange(event, null);
        } else if (!end && event > start) {
            this.selected = new DateRange(this.selected.start, event);
            this.range = Math.floor(
                (this.selected.end.getTime() - this.selected.start.getTime()) /
                    86400000
            ); //sets range between dates in days
        } else {
            this.range = 0;
            this.selected = new DateRange(event, null);
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
        this.dateRangeEvent.emit(
            new CalendarDateRange(this.selected.start, this.selected.end)
        );
    }
}
