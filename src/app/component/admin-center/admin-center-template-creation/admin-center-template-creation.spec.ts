import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterTemplateCreation } from './admin-center-template-creation';

describe('AdminCenterTemplateCreation', () => {
  let component: AdminCenterTemplateCreation;
  let fixture: ComponentFixture<AdminCenterTemplateCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterTemplateCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterTemplateCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
