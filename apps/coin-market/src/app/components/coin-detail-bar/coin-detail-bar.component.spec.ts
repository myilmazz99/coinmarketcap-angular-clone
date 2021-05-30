import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailBarComponent } from './coin-detail-bar.component';

describe('CoinDetailBarComponent', () => {
  let component: CoinDetailBarComponent;
  let fixture: ComponentFixture<CoinDetailBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
