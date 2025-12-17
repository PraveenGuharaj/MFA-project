import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageParameter } from './manage-parameter';

describe('ManageParameter', () => {
  let component: ManageParameter;
  let fixture: ComponentFixture<ManageParameter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageParameter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageParameter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
