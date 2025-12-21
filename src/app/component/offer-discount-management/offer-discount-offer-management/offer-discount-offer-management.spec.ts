import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDiscountOfferManagement } from './offer-discount-offer-management';

describe('OfferDiscountOfferManagement', () => {
  let component: OfferDiscountOfferManagement;
  let fixture: ComponentFixture<OfferDiscountOfferManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDiscountOfferManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDiscountOfferManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
