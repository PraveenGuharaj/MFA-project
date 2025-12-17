import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterForceUpdate } from './admin-center-force-update';

describe('AdminCenterForceUpdate', () => {
  let component: AdminCenterForceUpdate;
  let fixture: ComponentFixture<AdminCenterForceUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterForceUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterForceUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
