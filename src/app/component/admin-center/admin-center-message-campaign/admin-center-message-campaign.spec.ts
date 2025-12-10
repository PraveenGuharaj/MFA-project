import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterMessageCampaign } from './admin-center-message-campaign';

describe('AdminCenterMessageCampaign', () => {
  let component: AdminCenterMessageCampaign;
  let fixture: ComponentFixture<AdminCenterMessageCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterMessageCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterMessageCampaign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
