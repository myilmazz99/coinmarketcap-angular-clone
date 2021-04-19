import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinChartLegendComponent } from './coin-chart-legend.component';

describe('CoinChartLegendComponent', () => {
  let component: CoinChartLegendComponent;
  let fixture: ComponentFixture<CoinChartLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinChartLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinChartLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
