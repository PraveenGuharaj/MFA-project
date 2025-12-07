import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDigitalJourneyInsights } from './dashboard-digital-journey-insights';

describe('DashboardDigitalJourneyInsights', () => {
  let component: DashboardDigitalJourneyInsights;
  let fixture: ComponentFixture<DashboardDigitalJourneyInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDigitalJourneyInsights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDigitalJourneyInsights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
