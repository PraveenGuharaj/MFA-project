import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserOverviewMobile } from './dashboard-user-overview-mobile';

describe('DashboardUserOverviewMobile', () => {
  let component: DashboardUserOverviewMobile;
  let fixture: ComponentFixture<DashboardUserOverviewMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserOverviewMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserOverviewMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
