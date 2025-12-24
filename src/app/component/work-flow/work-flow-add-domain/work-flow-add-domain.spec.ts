import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddDomain } from './work-flow-add-domain';

describe('WorkFlowAddDomain', () => {
  let component: WorkFlowAddDomain;
  let fixture: ComponentFixture<WorkFlowAddDomain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddDomain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddDomain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
