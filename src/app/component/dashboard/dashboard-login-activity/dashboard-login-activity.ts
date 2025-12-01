import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';  // Importing BaseChartDirective for standalone components
import { Chart as ChartJS } from 'chart.js';
import { MatIconModule } from '@angular/material/icon';

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
  selector: 'app-dashboard-login-activity',
  imports: [
    CommonModule,
    MatCardModule,
    BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-login-activity.html',
  styleUrl: './dashboard-login-activity.scss',
})
export class DashboardLoginActivity {

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Successful', 'Failed'],
    datasets: [
      {
        data: [18324, 1000],  // Set successful and failed login values
        backgroundColor: ['#14CC4C', '#F44336'],  // Green for successful, Red for failed
        borderColor: ['white', 'white'],
        borderWidth: 2,
      }
    ]
  };

  // Doughnut Chart Options
  public doughnutChartOptions: ChartOptions | any = {
    responsive: true,
    rotation: -240,  // Rotate the chart so the first slice starts on the right (3 o'clock)
    circumference: 360, // Full circle
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
            return `${tooltipItem.raw} ${tooltipItem.label}`; // Show the value and label on hover
          }
        }
      }
    },
    elements: {
      arc: {
        borderWidth: 4,  // Border width of each arc (slice)
      }
    }
  };

  public mfaChartData: ChartData<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // X-Axis: Days of the week
    datasets: [
      {
        data: [2000, 3000, 2500, 4000, 3500, 5000, 6000],  // Mobile usage data
        label: 'Mobile',
        borderColor: '#14CC4C',  // Green color for the mobile line
        backgroundColor: 'rgba(20, 204, 76, 0.2)',  // Light green background
        fill: 'origin',
        tension: 0.4,
        pointBackgroundColor: '#14CC4C',  // Green points
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        data: [9000, 9500, 8000, 9800, 9200, 11000, 12000],  // Web usage data
        label: 'Web',
        borderColor: '#9A6DFF',  // Purple color for the web line
        backgroundColor: 'rgba(154, 109, 255, 0.2)',  // Light purple background
        fill: 'origin',
        tension: 0.4,
        pointBackgroundColor: '#9A6DFF',  // Purple points
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  public mfaChartOptions: ChartOptions | any = {
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
          stepSize: 3000,  // Step size for y-axis labels (0, 3000, 6000, 9000, 12000)
          max: 12000,      // Ensure that the maximum value is 12000
          min: 0           // Start from 0
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
            return tooltipItem.raw; // Show the actual value as tooltip label
          }
        }
      }
    }
  };



  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Web',
        data: [3000, 6000, 5500, 7000, 9200, 6500, 3000],
        backgroundColor: this.createGradient('#6017EB', '#AD8DEB'),
        borderWidth: 0
      },
      {
        label: 'Mobile',
        data: [2000, 3000, 2500, 4000, 3500, 5000, 6000],
        backgroundColor: this.createGradient('#14CC4C', '#8DEBA9'),
        borderWidth: 0
      }
    ]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        max: 12000,
        ticks: {
          stepSize: 3000,
          font: { size: 14 }
        },
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        ticks: {
          font: { size: 14 }
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 14 } }
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
        }
      }
    }
  };


  // Gradient helper
  createGradient(startColor: string, endColor: string): CanvasGradient {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx?.createLinearGradient(0, 0, 400, 0);
    gradient?.addColorStop(0, startColor);
    gradient?.addColorStop(1, endColor);
    return gradient!;
  }

  constructor() { }

  ngOnInit(): void {
    const ctx = document.createElement('canvas').getContext('2d');

    // Gradient for Success (Green)
    const gradientSuccess = ctx?.createLinearGradient(0, 0, 0, 200);
    gradientSuccess?.addColorStop(0, '#14CC4C'); // Start color (light green)
    gradientSuccess?.addColorStop(1, '#8DEBA9'); // End color (dark green)

    // Gradient for Failure (Red)
    const gradientFailure = ctx?.createLinearGradient(0, 0, 0, 200);
    gradientFailure?.addColorStop(0, '#EB8D8F'); // Start color (light red)
    gradientFailure?.addColorStop(1, '#EF4444'); // End color (dark red)

    // Set the gradients to the chart data
    this.doughnutChartData.datasets[0].backgroundColor = [gradientSuccess, gradientFailure];
  }

}