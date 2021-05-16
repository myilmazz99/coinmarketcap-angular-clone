import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCalendar } from '@angular/material/datepicker';

import { CalendarComponent } from './calendar.component';

@Component({ selector: 'ui-predefined-dates' })
class PredefinedDatesMockComponent {
    @Output() predefinedDateEvent = new EventEmitter<number>(null);
    @Input() predefinedDates: number[] = [];
}

@Component({
    selector: 'mat-calendar',
    providers: [{ provide: MatCalendar, useClass: MatCalendarMockComponent }],
})
class MatCalendarMockComponent {
    @Output() selectedChange = new EventEmitter<any>(null);
    @Input() maxDate = '';
    @Input() dateClass = '';

    updateTodaysDate() {
        return 2;
    }
}

describe('CalendarComponent', () => {
    let component: CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;
    let dateRangeEventEmitSpy: jest.SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CalendarComponent,
                PredefinedDatesMockComponent,
                MatCalendarMockComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(() => {
        component.closeMenu = jest.fn();
        component.resetSelections = jest.fn();

        dateRangeEventEmitSpy = jest.spyOn(component.dateRangeEvent, 'emit');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call emit on dateRangeEvent', () => {
        component.setPredefinedDate(2);

        expect(dateRangeEventEmitSpy).toHaveBeenCalledTimes(1);
    });

    describe('isSelected', () => {
        let date: Date;

        beforeEach(() => {
            date = new Date();
            component.calendar = {
                start: new Date().setHours(-24),
                end: date.getTime(),
                range: 0,
            };
        });

        it('should return "selected"', () => {
            const result = component.isSelected(date);

            expect(result).toEqual('selected');
        });

        it('should return "in-range"', () => {
            const result = component.isSelected(new Date(date.setHours(-2)));

            expect(result).toEqual('in-range');
        });

        it('should return nothing if dates dont match', () => {
            component.calendar = { ...component.calendar, start: 0, end: 0 };

            const result = component.isSelected(new Date());

            expect(result).toBeFalsy();
        });
    });

    describe('select', () => {
        it('should set date to calendar.start', () => {
            component.select(new Date());

            expect(component.calendar.start).not.toEqual(0);
        });

        it('should set date to calendar.end', () => {
            component.calendar = {
                ...component.calendar,
                end: 0,
                start: new Date().setHours(-1),
            };

            component.select(new Date());

            expect(component.calendar.end).not.toEqual(0);
        });

        it('should re-set date to calendar.start if selected date is lesser than the current calendar.start date', () => {
            component.calendar = {
                ...component.calendar,
                start: new Date().getTime(),
            };

            const date = new Date(new Date().setHours(-2));

            component.select(date);

            expect(component.calendar.start).toEqual(date.getTime());
            expect(component.calendar.end).toEqual(0);
        });

        it('should reset selections if date is already set', () => {
            component.calendar = {
                range: 0,
                end: new Date().getTime(),
                start: new Date().setHours(-2),
            };

            const date = new Date();

            component.select(date);

            expect(component.calendar.end).toEqual(0);
            expect(component.calendar.start).toEqual(date.getTime());
            expect(component.calendar.range).toEqual(0);
        });
    });

    describe('onConfirm', () => {
        it('should call emit on dateRangeEvent', () => {
            component.onConfirm();

            expect(dateRangeEventEmitSpy).toHaveBeenCalledTimes(1);
        });
    });
});
