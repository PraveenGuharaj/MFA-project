import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductHub } from './dashboard-product-hub';

describe('DashboardProductHub', () => {
  let component: DashboardProductHub;
  let fixture: ComponentFixture<DashboardProductHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProductHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProductHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
