import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMfaOtpActivityMobile } from './dashboard-mfa-otp-activity-mobile';

describe('DashboardMfaOtpActivityMobile', () => {
  let component: DashboardMfaOtpActivityMobile;
  let fixture: ComponentFixture<DashboardMfaOtpActivityMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMfaOtpActivityMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMfaOtpActivityMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
