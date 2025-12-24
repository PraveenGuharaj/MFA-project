import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowDomainManagement } from './work-flow-domain-management';

describe('WorkFlowDomainManagement', () => {
  let component: WorkFlowDomainManagement;
  let fixture: ComponentFixture<WorkFlowDomainManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowDomainManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowDomainManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
