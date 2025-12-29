import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowRoleManagement } from './work-flow-role-management';

describe('WorkFlowRoleManagement', () => {
  let component: WorkFlowRoleManagement;
  let fixture: ComponentFixture<WorkFlowRoleManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowRoleManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowRoleManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
