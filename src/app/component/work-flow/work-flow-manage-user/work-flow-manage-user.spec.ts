import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowManageUser } from './work-flow-manage-user';

describe('WorkFlowManageUser', () => {
  let component: WorkFlowManageUser;
  let fixture: ComponentFixture<WorkFlowManageUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowManageUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowManageUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
