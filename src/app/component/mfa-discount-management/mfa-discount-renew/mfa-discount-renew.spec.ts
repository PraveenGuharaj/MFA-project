import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDiscountRenew } from './mfa-discount-renew';

describe('MfaDiscountRenew', () => {
  let component: MfaDiscountRenew;
  let fixture: ComponentFixture<MfaDiscountRenew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDiscountRenew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDiscountRenew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
