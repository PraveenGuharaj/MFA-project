import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSessionMetrics } from './dashboard-session-metrics';

describe('DashboardSessionMetrics', () => {
  let component: DashboardSessionMetrics;
  let fixture: ComponentFixture<DashboardSessionMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSessionMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSessionMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
