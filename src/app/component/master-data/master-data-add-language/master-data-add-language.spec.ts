import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataAddLanguage } from './master-data-add-language';

describe('MasterDataAddLanguage', () => {
  let component: MasterDataAddLanguage;
  let fixture: ComponentFixture<MasterDataAddLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataAddLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataAddLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
