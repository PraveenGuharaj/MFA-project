import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterPushNotification } from './admin-center-push-notification';

describe('AdminCenterPushNotification', () => {
  let component: AdminCenterPushNotification;
  let fixture: ComponentFixture<AdminCenterPushNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterPushNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterPushNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
