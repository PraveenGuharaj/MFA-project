import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeographicMetrics } from './dashboard-geographic-metrics';

describe('DashboardGeographicMetrics', () => {
  let component: DashboardGeographicMetrics;
  let fixture: ComponentFixture<DashboardGeographicMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardGeographicMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGeographicMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
