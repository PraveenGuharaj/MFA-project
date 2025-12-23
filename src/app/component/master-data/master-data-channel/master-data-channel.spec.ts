import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataChannel } from './master-data-channel';

describe('MasterDataChannel', () => {
  let component: MasterDataChannel;
  let fixture: ComponentFixture<MasterDataChannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataChannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataChannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
