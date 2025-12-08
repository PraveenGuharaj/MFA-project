import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSessionMetricsWeb } from './dashboard-session-metrics-web';

describe('DashboardSessionMetricsWeb', () => {
  let component: DashboardSessionMetricsWeb;
  let fixture: ComponentFixture<DashboardSessionMetricsWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSessionMetricsWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSessionMetricsWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
