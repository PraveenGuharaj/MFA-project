import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageParameter } from './add-manage-parameter';

describe('AddManageParameter', () => {
  let component: AddManageParameter;
  let fixture: ComponentFixture<AddManageParameter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddManageParameter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddManageParameter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
