import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryCard } from './enquiry-card';

describe('EnquiryCard', () => {
  let component: EnquiryCard;
  let fixture: ComponentFixture<EnquiryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
