import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExportsButtonComponent } from './chart-exports-button.component';

describe('ChartExportsButtonComponent', () => {
  let component: ChartExportsButtonComponent;
  let fixture: ComponentFixture<ChartExportsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartExportsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExportsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
