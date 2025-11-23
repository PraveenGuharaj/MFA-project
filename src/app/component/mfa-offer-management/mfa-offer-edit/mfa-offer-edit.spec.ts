import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOfferEdit } from './mfa-offer-edit';

describe('MfaOfferEdit', () => {
  let component: MfaOfferEdit;
  let fixture: ComponentFixture<MfaOfferEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaOfferEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaOfferEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
