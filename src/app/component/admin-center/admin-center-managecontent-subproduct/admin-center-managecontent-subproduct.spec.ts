import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterManagecontentSubproduct } from './admin-center-managecontent-subproduct';

describe('AdminCenterManagecontentSubproduct', () => {
  let component: AdminCenterManagecontentSubproduct;
  let fixture: ComponentFixture<AdminCenterManagecontentSubproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterManagecontentSubproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterManagecontentSubproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
