import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecurityAccountStatusWeb } from './dashboard-security-account-status-web';

describe('DashboardSecurityAccountStatusWeb', () => {
  let component: DashboardSecurityAccountStatusWeb;
  let fixture: ComponentFixture<DashboardSecurityAccountStatusWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSecurityAccountStatusWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSecurityAccountStatusWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
