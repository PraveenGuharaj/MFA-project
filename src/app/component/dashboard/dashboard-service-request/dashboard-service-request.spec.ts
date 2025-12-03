import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServiceRequest } from './dashboard-service-request';

describe('DashboardServiceRequest', () => {
  let component: DashboardServiceRequest;
  let fixture: ComponentFixture<DashboardServiceRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardServiceRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServiceRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
