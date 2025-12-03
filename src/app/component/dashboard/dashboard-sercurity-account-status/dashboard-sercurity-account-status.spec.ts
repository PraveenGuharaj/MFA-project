import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSercurityAccountStatus } from './dashboard-sercurity-account-status';

describe('DashboardSercurityAccountStatus', () => {
  let component: DashboardSercurityAccountStatus;
  let fixture: ComponentFixture<DashboardSercurityAccountStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSercurityAccountStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSercurityAccountStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
