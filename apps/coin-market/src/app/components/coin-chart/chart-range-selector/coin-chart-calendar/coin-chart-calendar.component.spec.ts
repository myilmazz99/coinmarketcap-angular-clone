import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinChartCalendarComponent } from './coin-chart-calendar.component';

describe('CoinChartCalendarComponent', () => {
  let component: CoinChartCalendarComponent;
  let fixture: ComponentFixture<CoinChartCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinChartCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinChartCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
