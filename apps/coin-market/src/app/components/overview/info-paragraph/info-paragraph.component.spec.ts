import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoParagraphComponent } from './info-paragraph.component';

describe('InfoParagraphComponent', () => {
  let component: InfoParagraphComponent;
  let fixture: ComponentFixture<InfoParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
