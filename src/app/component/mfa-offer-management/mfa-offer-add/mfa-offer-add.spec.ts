import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOfferAdd } from './mfa-offer-add';

describe('MfaOfferAdd', () => {
  let component: MfaOfferAdd;
  let fixture: ComponentFixture<MfaOfferAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaOfferAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaOfferAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
