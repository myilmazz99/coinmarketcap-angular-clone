import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDataTabsComponent } from './chart-data-tabs.component';

describe('ChartDataTabsComponent', () => {
  let component: ChartDataTabsComponent;
  let fixture: ComponentFixture<ChartDataTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDataTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDataTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
