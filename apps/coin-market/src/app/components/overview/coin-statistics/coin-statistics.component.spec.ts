import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinStatisticsComponent } from './coin-statistics.component';

describe('CoinStatisticsComponent', () => {
  let component: CoinStatisticsComponent;
  let fixture: ComponentFixture<CoinStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
