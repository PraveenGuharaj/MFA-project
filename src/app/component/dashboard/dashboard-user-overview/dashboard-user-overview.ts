import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
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
  Legend,
  Filler
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

  // Bar Chart Options
  public barChartOptions: ChartOptions | any = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14
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

  public growthTrendData: ChartData<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [2000, 3000, 2500, 4000, 3500, 5000, 6000],
        label: 'Mobile',
        borderColor: '#14CC4C',
        backgroundColor: 'rgba(20, 204, 76, 0.2)',
        fill: 'origin',
        tension: 0.4,
        pointBackgroundColor: '#14CC4C',
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 2,
      },
      {
        data: [9000, 9500, 8000, 9800, 9200, 11000, 12000],
        label: 'Web',
        borderColor: '#6017EB',
        backgroundColor: 'rgba(96, 23, 235, 0.2)',
        fill: 'origin',
        tension: 0.4,
        pointBackgroundColor: '#6017EB',
        pointRadius: 6,
        pointHoverRadius: 8,
        borderWidth: 2,
      }
    ]
  };

  // Chart Options for User Growth Trend
  public growthTrendOptions: ChartOptions | any = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14
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
          min: 0
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
        intersect: false,
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.raw;
          }
        }
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
