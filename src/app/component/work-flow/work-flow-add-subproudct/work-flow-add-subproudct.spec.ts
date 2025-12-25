import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddSubproudct } from './work-flow-add-subproudct';

describe('WorkFlowAddSubproudct', () => {
  let component: WorkFlowAddSubproudct;
  let fixture: ComponentFixture<WorkFlowAddSubproudct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddSubproudct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddSubproudct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
