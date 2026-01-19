import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComonPopup } from './comon-popup';

describe('ComonPopup', () => {
  let component: ComonPopup;
  let fixture: ComponentFixture<ComonPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComonPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComonPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
