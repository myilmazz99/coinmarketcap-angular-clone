import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAddButtonSectionComponent } from './buy-add-button-section.component';

describe('BuyAddButtonSectionComponent', () => {
  let component: BuyAddButtonSectionComponent;
  let fixture: ComponentFixture<BuyAddButtonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAddButtonSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAddButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
