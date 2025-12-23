import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataLanguage } from './master-data-language';

describe('MasterDataLanguage', () => {
  let component: MasterDataLanguage;
  let fixture: ComponentFixture<MasterDataLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
