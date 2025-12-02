import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-mfa-deals',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    // NgxChartsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    // NgClass,
    MatSelectModule,
    MatMenuModule,
    MatSortModule
  ],
  templateUrl: './mfa-deals.html',
  styleUrls: ['./mfa-deals.scss'],
})
export class MfaDeals {
  @ViewChild(MatSort) sort!: MatSort;

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
    { name: 'POC', value: 10, color: '#67dae6' },
    { name: 'Pricing', value: 3, color: '#dc3835' },
    { name: 'Approved', value: 2, color: '#e1d2b3' },
    { name: 'Closed', value: 3, color: '#d89e97' },
    { name: 'Prospects', value: 10, color: '#2873aa' },
    { name: 'Lead', value: 6, color: '#c13f70' },
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

  rawData = [
    {
      name: 'TR Capital',
      createdBy: { name: 'Devon Lane', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Prospects',
      stageColor: '#4FC3F7',
      priorityColor: '#c8c8c8',
      nextCall: '07/12/2022',
      selected: false
    },
    {
      name: 'Gillette',
      createdBy: { name: 'Ronald Richards', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Lead',
      stageColor: '#bb4472',
      priorityColor: '#8a383b',
      nextCall: '07/12/2022',
      selected: false
    },
    {
      name: 'Pizza Hut',
      createdBy: { name: 'Robert Fox', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Cody Fisher', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Prospects',
      stageColor: '#4FC3F7',
      priorityColor: '#c2bd43',
      nextCall: '07/12/2022',
      selected: false
    },
    {
      name: 'Pulivinar vitae',
      createdBy: { name: 'Jacob Jones', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Ralph Edward', avatar: 'images/man-user-circle-icon.png' },
      stage: 'POC',
      stageColor: '#73dfe6',
      priorityColor: '#c8c8c8',
      nextCall: '07/12/2022',
      selected: false
    },
    {
      name: 'Starbucks',
      createdBy: { name: 'Guy Hawkins', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Ronald Richar', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Closed',
      stageColor: '#f9bcbb',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022',
      selected: false
    },
    {
      name: 'Louis Vuitton',
      createdBy: { name: 'Floyd Miles', avatar: 'images/man-user-circle-icon.png' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Darreil Stewar', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Pricing',
      stageColor: '#e3aabd',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022',
      selected: false
    },
    {
      name: 'Louis Vuitton',
      createdBy: { name: 'Floyd Miles', avatar: 'assets/images/man-user-circle-icon' },
      createdDate: '07/12/2022',
      size: '$120,45,121,565',
      assignedTo: { name: 'Darreil Stewar', avatar: 'images/man-user-circle-icon.png' },
      stage: 'Approved',
      stageColor: '#d9cba8',
      priorityColor: '#FFEB3B',
      nextCall: '07/12/2022',
      selected: false
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
      nextCall: '07/12/2022',
      selected: false
    },
  ];

  dataSource = new MatTableDataSource(this.rawData);
  originalData = [...this.rawData];

  priorityColors = this.priorityChartData.map(i => ({ name: i.name, value: i.color }));
  priorityTotal = this.priorityChartData.reduce((a, b) => a + b.value, 0);

  headerName = 'Pipeline';
  allSelected = false;

  tableData: any[] = [];
  columnFilters: any = {};

  createdByList = [...new Set(this.rawData.map(d => d.createdBy.name))];
  assignedToList = [...new Set(this.rawData.map(d => d.assignedTo.name))];

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    // custom sorting because of nested objects
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      switch (property) {
        case 'createdBy':
          return item.createdBy.name.toLowerCase();
        case 'assignedTo':
          return item.assignedTo.name.toLowerCase();
        default:
          return item[property]?.toString().toLowerCase();
      }
    };
  }

  getDealsByStage(stage: string) {
    return this.dataSource.data.filter(d => d.stage === stage);
  }

  getStageCount(stage: string) {
    return this.getDealsByStage(stage).length;
  }

  pipelineButton(event: any) {
    this.headerName = event;
  }

  toggleAllRows() {
    this.dataSource.data.forEach(row => (row.selected = this.allSelected));
  }

  checkIfAllSelected() {
    this.allSelected = this.dataSource.data.every(row => row.selected);
  }

  applySearch(event: any) {
    const value = event.target.value.trim().toLowerCase();

    this.dataSource.data = this.originalData.filter(item =>
      item.name.toLowerCase().includes(value) ||
      item.createdBy.name.toLowerCase().includes(value) ||
      item.assignedTo.name.toLowerCase().includes(value) ||
      item.stage.toLowerCase().includes(value)
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result as string;
      this.parseCSV(text);
    };

    reader.readAsText(file);
  }

  parseCSV(csv: string) {
    const lines = csv.split('\n');
    const header = lines[0].split(',');

    const importedRows = [];

    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',');

      if (row.length !== header.length) continue;

      let obj: any = {};
      header.forEach((col, index) => {
        obj[col.trim()] = row[index]?.trim();
      });

      importedRows.push(obj);
    }

    this.tableData = [...this.tableData, ...importedRows];
  }

  applyFilter(value: string, column: string) {
    this.columnFilters[column] = value.trim().toLowerCase();
    this.filterRows();
  }

  filterRows() {
    let result = [...this.originalData];

    Object.keys(this.columnFilters).forEach(key => {
      const filterValue = this.columnFilters[key];

      if (filterValue) {
        result = result.filter((row: any) => {
          if (key === 'createdBy') {
            return row.createdBy.name.toLowerCase().includes(filterValue);
          }

          if (key === 'assignedTo') {
            return row.assignedTo.name.toLowerCase().includes(filterValue);
          }

          return row[key]?.toString().toLowerCase().includes(filterValue);
        });
      }
    });

    this.dataSource.data = result;
  }

  clearFilters() {
    this.columnFilters = {};
    this.dataSource.data = [...this.originalData];
  }
}
