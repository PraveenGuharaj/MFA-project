import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterReadyToSync } from './admin-center-ready-to-sync';

describe('AdminCenterReadyToSync', () => {
  let component: AdminCenterReadyToSync;
  let fixture: ComponentFixture<AdminCenterReadyToSync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterReadyToSync]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterReadyToSync);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
