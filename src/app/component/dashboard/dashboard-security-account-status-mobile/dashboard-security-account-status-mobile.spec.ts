import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecurityAccountStatusMobile } from './dashboard-security-account-status-mobile';

describe('DashboardSecurityAccountStatusMobile', () => {
  let component: DashboardSecurityAccountStatusMobile;
  let fixture: ComponentFixture<DashboardSecurityAccountStatusMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSecurityAccountStatusMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSecurityAccountStatusMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
