import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOfferView } from './mfa-offer-view';

describe('MfaOfferView', () => {
  let component: MfaOfferView;
  let fixture: ComponentFixture<MfaOfferView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaOfferView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaOfferView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
