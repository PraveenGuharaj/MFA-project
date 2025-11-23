import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDiscountManagement } from './mfa-discount-management';

describe('MfaDiscountManagement', () => {
  let component: MfaDiscountManagement;
  let fixture: ComponentFixture<MfaDiscountManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDiscountManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDiscountManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
