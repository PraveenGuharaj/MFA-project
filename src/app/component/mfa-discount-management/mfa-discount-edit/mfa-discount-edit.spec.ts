import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDiscountEdit } from './mfa-discount-edit';

describe('MfaDiscountEdit', () => {
  let component: MfaDiscountEdit;
  let fixture: ComponentFixture<MfaDiscountEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDiscountEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDiscountEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
