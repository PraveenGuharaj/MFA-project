import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServiceRequestWeb } from './dashboard-service-request-web';

describe('DashboardServiceRequestWeb', () => {
  let component: DashboardServiceRequestWeb;
  let fixture: ComponentFixture<DashboardServiceRequestWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardServiceRequestWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServiceRequestWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
