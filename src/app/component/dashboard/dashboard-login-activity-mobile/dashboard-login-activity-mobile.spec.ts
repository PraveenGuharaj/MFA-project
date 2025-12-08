import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoginActivityMobile } from './dashboard-login-activity-mobile';

describe('DashboardLoginActivityMobile', () => {
  let component: DashboardLoginActivityMobile;
  let fixture: ComponentFixture<DashboardLoginActivityMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLoginActivityMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLoginActivityMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
