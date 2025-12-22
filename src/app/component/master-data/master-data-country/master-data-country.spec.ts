import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataCountry } from './master-data-country';

describe('MasterDataCountry', () => {
  let component: MasterDataCountry;
  let fixture: ComponentFixture<MasterDataCountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataCountry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
