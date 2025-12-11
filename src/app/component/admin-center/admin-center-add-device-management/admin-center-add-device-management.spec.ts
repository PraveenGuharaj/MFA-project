import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddDeviceManagement } from './admin-center-add-device-management';

describe('AdminCenterAddDeviceManagement', () => {
  let component: AdminCenterAddDeviceManagement;
  let fixture: ComponentFixture<AdminCenterAddDeviceManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddDeviceManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddDeviceManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
