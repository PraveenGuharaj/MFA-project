import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterManageLocators } from './admin-center-manage-locators';

describe('AdminCenterManageLocators', () => {
  let component: AdminCenterManageLocators;
  let fixture: ComponentFixture<AdminCenterManageLocators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterManageLocators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterManageLocators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
