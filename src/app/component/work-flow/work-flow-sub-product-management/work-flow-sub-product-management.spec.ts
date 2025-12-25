import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowSubProductManagement } from './work-flow-sub-product-management';

describe('WorkFlowSubProductManagement', () => {
  let component: WorkFlowSubProductManagement;
  let fixture: ComponentFixture<WorkFlowSubProductManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowSubProductManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowSubProductManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
