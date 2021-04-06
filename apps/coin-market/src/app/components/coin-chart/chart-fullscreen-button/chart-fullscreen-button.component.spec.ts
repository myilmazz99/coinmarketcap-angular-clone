import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFullscreenButtonComponent } from './chart-fullscreen-button.component';

describe('ChartFullscreenButtonComponent', () => {
  let component: ChartFullscreenButtonComponent;
  let fixture: ComponentFixture<ChartFullscreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFullscreenButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFullscreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
