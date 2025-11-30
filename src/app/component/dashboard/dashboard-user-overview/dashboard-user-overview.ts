import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';  // Importing BaseChartDirective for standalone components
import { Chart as ChartJS } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  DoughnutController,
  ArcElement,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-dashboard-user-overview',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard-user-overview.html',
  styleUrls: ['./dashboard-user-overview.scss'],
})
export class DashboardUserOverview implements OnInit {
  public lineChartData: ChartData<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [5000, 6000, 7000, 8000, 8500, 9000, 10000],
        label: 'Mobile',
        fill: 'origin',
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        tension: 0.3,
      },
      {
        data: [4000, 5000, 6000, 7000, 7500, 8000, 9000],
        label: 'Web',
        fill: 'origin',
        borderColor: 'purple',
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
        tension: 0.3,
      }
    ]
  };

  // User Distribution Doughnut Chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Mobile', 'Web'],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#14CC4C', '#AD8DEB'],
        borderColor: ['white', 'white'],
        borderWidth: 2,
      }
    ]
  };

  // Users Over Time Bar Chart
  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Mobile',
        data: [6500, 8000, 5500, 6000, 7000, 3000, 6000],
        backgroundColor: [],
        borderColor: '#14CC4C',
        borderWidth: 1
      },
      {
        label: 'Web',
        data: [9000, 12000, 3500, 4000, 7500, 5000, 9000],
        backgroundColor: [],
        borderColor: '#AD8DEB',
        borderWidth: 1
      }
    ]
  };

  // Chart Options for Doughnut (with center text)
  public doughnutChartOptions: ChartOptions | any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
      // Custom Plugin to display text in the center of the doughnut chart
      beforeDraw: (chart: any) => {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        const fontSize = 24;
        const fontWeight = 'bold';
        const fontColor = '#1f1515ff';

        ctx.font = `${fontWeight} ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fontColor;
        ctx.fillText('8,943 Active Users', width / 2, height / 2); // Center the text
      },
    },
  };


  // Bar and Line Chart Options
  public lineChartOptions: ChartOptions | any = {
    responsive: true,
    scales: {
      x: { type: 'category', beginAtZero: true },
      y: { type: 'linear', beginAtZero: true }
    },
    plugins: {
      tooltip: { enabled: true, mode: 'nearest', intersect: false }
    }
  };

  // Bar Chart Options
  public barChartOptions: ChartOptions | any = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true, // Ensure the x-axis starts at zero
        ticks: {
          font: {
            size: 14 // Font size for x-axis labels
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14
          },
          stepSize: 3000,
          max: 12000,
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false
      }
    }
  };

  // bar chart

  constructor() { }

  ngOnInit(): void {
    const ctx = document.getElementById('myDoughnutChart') as HTMLCanvasElement;
    const gradientMobile = ctx?.getContext('2d')?.createLinearGradient(0, 0, 0, 200);
    gradientMobile?.addColorStop(0, '#14CC4C');
    gradientMobile?.addColorStop(1, '#8DEBA9');
    const gradientWeb = ctx?.getContext('2d')?.createLinearGradient(0, 0, 0, 200);
    gradientWeb?.addColorStop(0, '#AD8DEB');
    gradientWeb?.addColorStop(1, '#6017EB');
    this.doughnutChartData.datasets[0].backgroundColor = [gradientMobile, gradientWeb];
    this.barChartData.datasets[0].backgroundColor = gradientMobile;
    this.barChartData.datasets[1].backgroundColor = gradientWeb;
  }
}
