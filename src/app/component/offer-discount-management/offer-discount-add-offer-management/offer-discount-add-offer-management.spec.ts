import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDiscountAddOfferManagement } from './offer-discount-add-offer-management';

describe('OfferDiscountAddOfferManagement', () => {
  let component: OfferDiscountAddOfferManagement;
  let fixture: ComponentFixture<OfferDiscountAddOfferManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDiscountAddOfferManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDiscountAddOfferManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
