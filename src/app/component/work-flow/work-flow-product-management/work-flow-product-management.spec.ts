import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowProductManagement } from './work-flow-product-management';

describe('WorkFlowProductManagement', () => {
  let component: WorkFlowProductManagement;
  let fixture: ComponentFixture<WorkFlowProductManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowProductManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowProductManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
