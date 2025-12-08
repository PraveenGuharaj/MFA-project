import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMfaOtpActivityWeb } from './dashboard-mfa-otp-activity-web';

describe('DashboardMfaOtpActivityWeb', () => {
  let component: DashboardMfaOtpActivityWeb;
  let fixture: ComponentFixture<DashboardMfaOtpActivityWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMfaOtpActivityWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMfaOtpActivityWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
