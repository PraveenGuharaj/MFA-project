import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoginActivityWeb } from './dashboard-login-activity-web';

describe('DashboardLoginActivityWeb', () => {
  let component: DashboardLoginActivityWeb;
  let fixture: ComponentFixture<DashboardLoginActivityWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLoginActivityWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLoginActivityWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
