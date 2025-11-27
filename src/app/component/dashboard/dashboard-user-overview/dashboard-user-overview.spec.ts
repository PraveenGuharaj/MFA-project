import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserOverview } from './dashboard-user-overview';

describe('DashboardUserOverview', () => {
  let component: DashboardUserOverview;
  let fixture: ComponentFixture<DashboardUserOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
