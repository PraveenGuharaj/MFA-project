import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-mfa-deals',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgxChartsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    NgClass
  ],
  templateUrl: './mfa-deals.html',
  styleUrls: ['./mfa-deals.scss']
})
export class MfaDeals {
  activeView: 'table' | 'board' = 'table';
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

  displayedColumns = [
    'select',
    'name',
    'createdBy',
    'createdDate',
    'size',
    'assignedTo',
    'stage',
    'priority',
    'nextCall'
  ];

  dataSource = [
    {
      name: 'TR Capital',
      createdBy: { name: 'Devon Lane', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Prospects',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'Gillette',
      createdBy: { name: 'Ronald Richards', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Prospects',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'Pizza Hut',
      createdBy: { name: 'Robert Fox', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Prospects',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'Pulivinar vitae',
      createdBy: { name: 'Jacob Jones', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Ralph Edward', avatar: 'images/man-user-circle-icon.png' },
      stage: 'POC',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'Starbucks',
      createdBy: { name: 'Guy Hawkins', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Ronald Richar', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Closed',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'Louis Vuitton',
      createdBy: { name: 'Floyd Miles', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Darreil Stewar', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Pricing',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'Louis Vuitton',
      createdBy: { name: 'Floyd Miles', avatar: 'assets/images/man-user-circle-icon' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Darreil Stewar', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Pricing',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
    {
      name: 'TR Capital',
      createdBy: { name: 'Devon Lane', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Prospects',
      stageColor: '#4FC3F7',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022'
    },
  ];

  priorityColors = this.priorityChartData.map(i => ({ name: i.name, value: i.color }));
  priorityTotal = this.priorityChartData.reduce((a, b) => a + b.value, 0);
  headerName = 'Pipeline';

  getDealsByStage(stage: string) {
    return this.dataSource.filter(d => d.stage === stage);
  }

  getStageCount(stage: string) {
    return this.getDealsByStage(stage).length;
  }
  pipelineButton(event: any) {
    this.headerName = event;
  }
}