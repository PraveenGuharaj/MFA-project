import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOfferRenew } from './mfa-offer-renew';

describe('MfaOfferRenew', () => {
  let component: MfaOfferRenew;
  let fixture: ComponentFixture<MfaOfferRenew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaOfferRenew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaOfferRenew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
