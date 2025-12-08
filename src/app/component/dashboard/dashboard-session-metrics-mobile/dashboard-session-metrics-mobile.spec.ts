import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSessionMetricsMobile } from './dashboard-session-metrics-mobile';

describe('DashboardSessionMetricsMobile', () => {
  let component: DashboardSessionMetricsMobile;
  let fixture: ComponentFixture<DashboardSessionMetricsMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSessionMetricsMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSessionMetricsMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
