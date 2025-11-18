import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-mfa-deals',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, NgxChartsModule],
  templateUrl: './mfa-deals.html',
  styleUrls: ['./mfa-deals.scss']
})
export class MfaDeals {

  summary = [
    { icon: 'insert_chart', label: 'Weighted pipeline value', value: '45', color: '#FF9F43' },
    { icon: 'account_balance_wallet', label: 'Forecasted value', value: '56M', color: '#EA4C89' },
    { icon: 'donut_large', label: 'Pipeline value', value: '16M', color: '#2BB673' }
  ];

  scoreChartData = [
    { name: 'Score 80 - 100', value: 18, color: '#FF6F61' },
    { name: 'Score 51 - 79', value: 18, color: '#FFD460' },
    { name: 'Score 10 - 50', value: 18, color: '#4CD7A5' }
  ];
  scoreColors = this.scoreChartData.map(i => ({ name: i.name, value: i.color }));
  scoreTotal = this.scoreChartData.reduce((a, b) => a + b.value, 0);

  stagesChartData = [
    { name: 'POC', value: 10, color: '#e37a5f' },
    { name: 'Pricing', value: 3, color: '#dc3835' },
    { name: 'Approved', value: 2, color: '#d3499f' },
    { name: 'Closed', value: 3, color: '#a253cf' },
    { name: 'Prospects', value: 10, color: '#2873aa' },
    { name: 'Lead', value: 6, color: '#1ac69a' },
    { name: 'Presentation', value: 5, color: '#c3d74e' },
  ];
  stagesColors = this.stagesChartData.map(i => ({ name: i.name, value: i.color }));
  stagesTotal = this.stagesChartData.reduce((a, b) => a + b.value, 0);

  priorityChartData = [
    { name: 'Urgent', value: 6, color: '#D32F2F' },
    { name: 'High', value: 3, color: '#FFA726' },
    { name: 'Normal', value: 12, color: '#4FC3F7' },
    { name: 'Low', value: 11, color: '#90A4AE' },
    { name: 'None', value: 2, color: '#E0E0E0' }
  ];
  priorityColors = this.priorityChartData.map(i => ({ name: i.name, value: i.color }));
  priorityTotal = this.priorityChartData.reduce((a, b) => a + b.value, 0);
}
