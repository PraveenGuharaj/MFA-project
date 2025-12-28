import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddAccess } from './work-flow-add-access';

describe('WorkFlowAddAccess', () => {
  let component: WorkFlowAddAccess;
  let fixture: ComponentFixture<WorkFlowAddAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
