import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-user-overview',
  imports: [
    CommonModule,
    MatCardModule,
    NgxChartsModule
  ],
  templateUrl: './dashboard-user-overview.html',
  styleUrl: './dashboard-user-overview.scss',
})
export class DashboardUserOverview {
  data = [
    {
      "name": "Amazon",
      "value": 50
    },
    {
      "name": "Flipkart",
      "value": 30
    },
    {
      "name": "Myntra",
      "value": 20
    }
  ];
}
