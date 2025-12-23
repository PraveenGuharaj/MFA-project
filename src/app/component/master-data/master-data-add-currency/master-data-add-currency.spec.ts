import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataAddCurrency } from './master-data-add-currency';

describe('MasterDataAddCurrency', () => {
  let component: MasterDataAddCurrency;
  let fixture: ComponentFixture<MasterDataAddCurrency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataAddCurrency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataAddCurrency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
