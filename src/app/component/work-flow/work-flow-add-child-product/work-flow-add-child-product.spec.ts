import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddChildProduct } from './work-flow-add-child-product';

describe('WorkFlowAddChildProduct', () => {
  let component: WorkFlowAddChildProduct;
  let fixture: ComponentFixture<WorkFlowAddChildProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddChildProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddChildProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
