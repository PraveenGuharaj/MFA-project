import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOfferDelete } from './mfa-offer-delete';

describe('MfaOfferDelete', () => {
  let component: MfaOfferDelete;
  let fixture: ComponentFixture<MfaOfferDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaOfferDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaOfferDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
