import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddUser } from './work-flow-add-user';

describe('WorkFlowAddUser', () => {
  let component: WorkFlowAddUser;
  let fixture: ComponentFixture<WorkFlowAddUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
