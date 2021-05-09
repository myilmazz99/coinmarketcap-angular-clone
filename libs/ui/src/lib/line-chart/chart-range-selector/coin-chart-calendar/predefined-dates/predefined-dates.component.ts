import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-predefined-dates',
    templateUrl: './predefined-dates.component.html',
    styleUrls: ['./predefined-dates.component.scss'],
})
export class PredefinedDatesComponent {
    @Output() predefinedDateEvent = new EventEmitter<number>(null);
    @Input() predefinedDates: number[];

    onClick(val: number) {
        this.predefinedDateEvent.emit(val);
    }
}
