import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDiscountAddDiscountManagement } from './offer-discount-add-discount-management';

describe('OfferDiscountAddDiscountManagement', () => {
  let component: OfferDiscountAddDiscountManagement;
  let fixture: ComponentFixture<OfferDiscountAddDiscountManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferDiscountAddDiscountManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferDiscountAddDiscountManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
