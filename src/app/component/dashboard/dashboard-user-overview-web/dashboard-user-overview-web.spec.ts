import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarUserOverviewWeb } from './dashboar-user-overview-web';

describe('DashboarUserOverviewWeb', () => {
  let component: DashboarUserOverviewWeb;
  let fixture: ComponentFixture<DashboarUserOverviewWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarUserOverviewWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarUserOverviewWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
