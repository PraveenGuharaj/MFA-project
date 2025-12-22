import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDiscountDiscountManagement } from './offer-discount-discount-management';

describe('OfferDiscountDiscountManagement', () => {
  let component: OfferDiscountDiscountManagement;
  let fixture: ComponentFixture<OfferDiscountDiscountManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDiscountDiscountManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDiscountDiscountManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
