import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataAddChannel } from './master-data-add-channel';

describe('MasterDataAddChannel', () => {
  let component: MasterDataAddChannel;
  let fixture: ComponentFixture<MasterDataAddChannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataAddChannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataAddChannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
