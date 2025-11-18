import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDeals } from './mfa-deals';

describe('MfaDeals', () => {
  let component: MfaDeals;
  let fixture: ComponentFixture<MfaDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
