import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAccessPermissionManagement } from './work-flow-access-permission-management';

describe('WorkFlowAccessPermissionManagement', () => {
  let component: WorkFlowAccessPermissionManagement;
  let fixture: ComponentFixture<WorkFlowAccessPermissionManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAccessPermissionManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAccessPermissionManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
