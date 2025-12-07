import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransactionPerformance } from './dashboard-transaction-performance';

describe('DashboardTransactionPerformance', () => {
  let component: DashboardTransactionPerformance;
  let fixture: ComponentFixture<DashboardTransactionPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTransactionPerformance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTransactionPerformance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
