import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterDeviceManagement } from './admin-center-device-management';

describe('AdminCenterDeviceManagement', () => {
  let component: AdminCenterDeviceManagement;
  let fixture: ComponentFixture<AdminCenterDeviceManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterDeviceManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterDeviceManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
