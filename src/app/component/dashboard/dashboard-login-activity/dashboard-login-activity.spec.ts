import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoginActivity } from './dashboard-login-activity';

describe('DashboardLoginActivity', () => {
  let component: DashboardLoginActivity;
  let fixture: ComponentFixture<DashboardLoginActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLoginActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLoginActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
