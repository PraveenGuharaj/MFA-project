import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransactionPerformace } from './dashboard-transaction-performace';

describe('DashboardTransactionPerformace', () => {
  let component: DashboardTransactionPerformace;
  let fixture: ComponentFixture<DashboardTransactionPerformace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTransactionPerformace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTransactionPerformace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
