import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeographicsChart } from './dashboard-geographics-chart';

describe('DashboardGeographicsChart', () => {
  let component: DashboardGeographicsChart;
  let fixture: ComponentFixture<DashboardGeographicsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardGeographicsChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGeographicsChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
