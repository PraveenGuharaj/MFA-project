import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataCurrency } from './master-data-currency';

describe('MasterDataCurrency', () => {
  let component: MasterDataCurrency;
  let fixture: ComponentFixture<MasterDataCurrency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataCurrency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataCurrency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
