import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDiscountDelete } from './mfa-discount-delete';

describe('MfaDiscountDelete', () => {
  let component: MfaDiscountDelete;
  let fixture: ComponentFixture<MfaDiscountDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDiscountDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDiscountDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
