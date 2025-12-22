import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataAddCountry } from './master-data-add-country';

describe('MasterDataAddCountry', () => {
  let component: MasterDataAddCountry;
  let fixture: ComponentFixture<MasterDataAddCountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataAddCountry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataAddCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
