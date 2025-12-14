import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterManageContent } from './admin-center-manage-content';

describe('AdminCenterManageContent', () => {
  let component: AdminCenterManageContent;
  let fixture: ComponentFixture<AdminCenterManageContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterManageContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterManageContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
