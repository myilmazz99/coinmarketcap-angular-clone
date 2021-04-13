import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinStatisticRowComponent } from './coin-statistic-row.component';

describe('CoinStatisticRowComponent', () => {
  let component: CoinStatisticRowComponent;
  let fixture: ComponentFixture<CoinStatisticRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinStatisticRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinStatisticRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
