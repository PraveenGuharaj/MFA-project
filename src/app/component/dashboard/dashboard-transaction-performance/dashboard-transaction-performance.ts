import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoryScale, LinearScale, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart, ChartOptions, registerables } from 'chart.js';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MatIconModule } from '@angular/material/icon';

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

@Component({
  selector: 'app-dashboard-transaction-performance',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard-transaction-performance.html',
  styleUrls: ['./dashboard-transaction-performance.scss'],
})
export class DashboardTransactionPerformance implements AfterViewInit {
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;
  lineChart!: Chart;
  categories: any[] = [];  // To hold category data from API
  selectedCategoryData: any = {};  // To hold the selected category data

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getTransferViewCount();
  }

  ngAfterViewInit() {
    // Make sure the chart is initialized after the view is initialized
    this.initializeLineChart();
  }

  getTransferViewCount() {
    this.adminCenterService.getTransferViewCount().subscribe((res: any) => {
      this.categories = res?.data?.categoryCodes?.[0]?.data || [];
      console.log('categories', this.categories);


      if (this.categories.length) {
        // Set default category (e.g., "Ooredoo")
        this.selectedCategoryData = this.categories.find(
          (category: any) => category.categoryCodeDesc === 'Ooredoo'
        );
        this.updateChartForSelectedCategory();
      }
    });
  }

  // This function is triggered when the dropdown selection changes
  onCategoryChange(event: any) {
    const selectedCategoryCode = event.target.value;
    this.selectedCategoryData = this.categories.find(
      (category: any) => category.categoryCode === selectedCategoryCode
    );
    this.updateChartForSelectedCategory();
  }

  updateChartForSelectedCategory() {
    const dates = this.selectedCategoryData?.categoryCodeData?.dates || [];
    const labels = dates.map((d: any) => d.date);
    const successData = dates.map((d: any) => d.successCount);
    const failureData = dates.map((d: any) => d.failureCount);

    this.updateLineChart(labels, successData, failureData);
  }

  initializeLineChart() {
    const ctx = this.myLineChartElement.nativeElement.getContext('2d');

    const successGradient = ctx.createLinearGradient(0, 0, 0, 400);
    successGradient.addColorStop(0, 'rgba(41,204,90,0.35)');
    successGradient.addColorStop(1, 'rgba(41,204,90,0.02)');

    const failureGradient = ctx.createLinearGradient(0, 0, 0, 400);
    failureGradient.addColorStop(0, 'rgba(239,68,68,0.35)');
    failureGradient.addColorStop(1, 'rgba(239,68,68,0.02)');

    // Create the chart with empty data
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Failure',
            data: [],
            borderColor: '#EF4444',
            backgroundColor: failureGradient,
            fill: true,
            tension: 0.4,  // Set tension for curviness (for the failure line)
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            label: 'Success',
            data: [],
            borderColor: '#29CC5A',
            backgroundColor: successGradient,
            fill: true,
            tension: 0.4,  // Set tension for curviness (for the success line)
            pointRadius: 0,
            borderWidth: 2,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: '#ffffff',
            titleColor: '#000000',
            bodyColor: '#000000',
            borderColor: '#E0E0E0',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            callbacks: {
              title: (items) => {
                return items[0].label; // Display the date
              },
              label: (context) => {
                // Display Failure and Success count in tooltip
                return `${context.dataset.label} count: ${context.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#A2A3A5' },
            grid: { display: false }
          },
          y: {
            min: 0,
            ticks: {
              color: '#A2A3A5'
            },
            grid: { color: '#E6E6E6' }
          }
        }
      }
    });
  }

  updateLineChart(labels: string[], success: number[], failure: number[]) {
    if (!this.lineChart) return;

    const allValues = [...success, ...failure];
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const range = maxValue - minValue || 1;

    // Update chart with new data
    this.lineChart.data.labels = labels;
    this.lineChart.data.datasets[0].data = failure;
    this.lineChart.data.datasets[1].data = success;

    // Dynamically adjust y-axis min and max values based on data
    const yScale: any = this.lineChart.options.scales!['y'];
    yScale.min = minValue - 1; // Slightly reduce to ensure space on the bottom
    yScale.max = maxValue + 1; // Slightly increase to ensure space on the top
    yScale.ticks.stepSize = Math.ceil(range / 4);
    yScale.ticks.precision = 0;

    // Update the chart after changing data
    this.lineChart.update();
  }
}
