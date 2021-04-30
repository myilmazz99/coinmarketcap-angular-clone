import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { CoinStatisticRowComponent } from './coin-statistic-row.component';

describe('CoinStatisticRowComponent', () => {
    let component: CoinStatisticRowComponent;
    let fixture: ComponentFixture<CoinStatisticRowComponent>;
    let dom: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatIconModule],
            declarations: [CoinStatisticRowComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoinStatisticRowComponent);
        component = fixture.componentInstance;
        dom = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('component.comparison', () => {
        describe('percentage is negative', () => {
            it('should return comparison object with positive number percentage', () => {
                component.percentage = -10;
                component.ngOnInit();

                expect(component.comparison).toEqual({
                    icon: 'expand_more',
                    percentage: 10,
                });
            });
        });

        it('should return comparison object', () => {
            component.percentage = 10;
            component.ngOnInit();

            expect(component.comparison).toEqual({
                icon: 'expand_less',
                percentage: 10,
            });
        });
    });

    describe('component.isArray()', () => {
        it('should return true', () => {
            component.value = [];
            const spy = jest.spyOn(component, 'isArray');
            component.isArray();

            expect(spy).toHaveReturnedWith(true);
        });
    });

    describe('component.isString()', () => {
        it('should return true', () => {
            component.value = 'str';
            const isStringSpy = jest.spyOn(component, 'isString');
            component.isString();

            expect(isStringSpy).toHaveReturnedWith(true);
        });
    });
});
