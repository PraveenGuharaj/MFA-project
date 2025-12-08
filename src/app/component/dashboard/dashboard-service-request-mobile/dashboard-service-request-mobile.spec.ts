import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServiceRequestMobile } from './dashboard-service-request-mobile';

describe('DashboardServiceRequestMobile', () => {
  let component: DashboardServiceRequestMobile;
  let fixture: ComponentFixture<DashboardServiceRequestMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardServiceRequestMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServiceRequestMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
