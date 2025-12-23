import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataAddUnit } from './master-data-add-unit';

describe('MasterDataAddUnit', () => {
  let component: MasterDataAddUnit;
  let fixture: ComponentFixture<MasterDataAddUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataAddUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataAddUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
