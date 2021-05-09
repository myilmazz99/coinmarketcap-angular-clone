import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedDatesComponent } from './predefined-dates.component';

describe('PredefinedDatesComponent', () => {
  let component: PredefinedDatesComponent;
  let fixture: ComponentFixture<PredefinedDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredefinedDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
