import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaList } from './mfa-list';

describe('MfaList', () => {
  let component: MfaList;
  let fixture: ComponentFixture<MfaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
