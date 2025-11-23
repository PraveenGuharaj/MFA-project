import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDiscountAdd } from './mfa-discount-add';

describe('MfaDiscountAdd', () => {
  let component: MfaDiscountAdd;
  let fixture: ComponentFixture<MfaDiscountAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDiscountAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDiscountAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
