import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-predefined-dates',
    templateUrl: './predefined-dates.component.html',
    styleUrls: ['./predefined-dates.component.scss'],
})
export class PredefinedDatesComponent {
    /**
     * emits selected value on list
     */
    @Output() predefinedDateEvent = new EventEmitter<number>(null);

    /**
     * recieves an array of dates in days
     */
    @Input() predefinedDates: number[];

    /**
     * calls emit on output event
     */
    onClick(val: number) {
        this.predefinedDateEvent.emit(val);
    }
}
