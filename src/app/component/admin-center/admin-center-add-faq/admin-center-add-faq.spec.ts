import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddFaq } from './admin-center-add-faq';

describe('AdminCenterAddFaq', () => {
  let component: AdminCenterAddFaq;
  let fixture: ComponentFixture<AdminCenterAddFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
