import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataUnit } from './master-data-unit';

describe('MasterDataUnit', () => {
  let component: MasterDataUnit;
  let fixture: ComponentFixture<MasterDataUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
