import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnblockUsers } from './block-unblock-users';

describe('BlockUnblockUsers', () => {
  let component: BlockUnblockUsers;
  let fixture: ComponentFixture<BlockUnblockUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockUnblockUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockUnblockUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
