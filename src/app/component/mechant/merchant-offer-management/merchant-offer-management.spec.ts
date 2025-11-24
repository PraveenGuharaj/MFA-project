import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOfferManagement } from './merchant-offer-management';

describe('MerchantOfferManagement', () => {
  let component: MerchantOfferManagement;
  let fixture: ComponentFixture<MerchantOfferManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantOfferManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantOfferManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
