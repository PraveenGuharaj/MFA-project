import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowChildProductManangement } from './work-flow-child-product-manangement';

describe('WorkFlowChildProductManangement', () => {
  let component: WorkFlowChildProductManangement;
  let fixture: ComponentFixture<WorkFlowChildProductManangement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowChildProductManangement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowChildProductManangement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
