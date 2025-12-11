import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddMessageCampaign } from './admin-center-add-message-campaign';

describe('AdminCenterAddMessageCampaign', () => {
  let component: AdminCenterAddMessageCampaign;
  let fixture: ComponentFixture<AdminCenterAddMessageCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddMessageCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddMessageCampaign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
