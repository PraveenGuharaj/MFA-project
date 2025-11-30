import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMfaOtpActivity } from './dashboard-mfa-otp-activity';

describe('DashboardMfaOtpActivity', () => {
  let component: DashboardMfaOtpActivity;
  let fixture: ComponentFixture<DashboardMfaOtpActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMfaOtpActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMfaOtpActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
