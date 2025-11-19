import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOfferManagement } from './mfa-offer-management';

describe('MfaOfferManagement', () => {
  let component: MfaOfferManagement;
  let fixture: ComponentFixture<MfaOfferManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaOfferManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaOfferManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
