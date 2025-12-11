import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddTemplateCreation } from './admin-center-add-template-creation';

describe('AdminCenterAddTemplateCreation', () => {
  let component: AdminCenterAddTemplateCreation;
  let fixture: ComponentFixture<AdminCenterAddTemplateCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddTemplateCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddTemplateCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
