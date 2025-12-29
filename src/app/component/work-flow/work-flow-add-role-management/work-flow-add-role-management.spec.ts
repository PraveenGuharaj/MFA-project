import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddRoleManagement } from './work-flow-add-role-management';

describe('WorkFlowAddRoleManagement', () => {
  let component: WorkFlowAddRoleManagement;
  let fixture: ComponentFixture<WorkFlowAddRoleManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddRoleManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddRoleManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
