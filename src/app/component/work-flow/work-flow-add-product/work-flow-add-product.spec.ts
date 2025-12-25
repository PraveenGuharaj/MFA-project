import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowAddProduct } from './work-flow-add-product';

describe('WorkFlowAddProduct', () => {
  let component: WorkFlowAddProduct;
  let fixture: ComponentFixture<WorkFlowAddProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowAddProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowAddProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
