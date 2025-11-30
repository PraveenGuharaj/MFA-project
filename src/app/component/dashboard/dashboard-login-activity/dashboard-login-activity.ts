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

  public barChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // Y-Axis: Days of the week
    datasets: [
      {
        label: 'Users Over Time',
        data: [6500, 8000, 5500, 6000, 7000, 3000, 6000],  // Data for each day
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#E0D4FA');
          gradient.addColorStop(1, '#9A6DFF');
          return gradient;  // Gradient for each bar
        },
        borderColor: '#9A6DFF',
        borderWidth: 1,
        barThickness: 20,  // Adjust bar thickness
        borderRadius: 10,  // Smooth edges
      }
    ]
  };

  // Bar Chart Options for Horizontal Bar Chart
  public barChartOptions: ChartOptions | any = {
    responsive: true,
    indexAxis: 'y',  // Horizontal bars (y-axis for labels)
    scales: {
      x: {
        beginAtZero: true,  // Ensure the x-axis starts at zero
        ticks: {
          font: {
            size: 14  // Font size for x-axis labels
          },
          stepSize: 3000,  // Set step size to match 0, 3000, 6000, 9000, 12000
          max: 12000,  // Maximum value for x-axis
        }
      },
      y: {
        beginAtZero: true,  // Ensure the y-axis starts at zero
        ticks: {
          font: {
            size: 14  // Font size for y-axis labels
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14  // Font size for the legend
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

  public lineChartData: ChartData<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // X-Axis: Days of the week
    datasets: [
      {
        data: [1200, 1500, 1000, 2000, 1300, 900, 1000],  // Daily login counts
        label: 'Logins',
        borderColor: '#6B52D4',  // Purple color for the line
        backgroundColor: 'rgba(107, 82, 212, 0.2)', // Light purple gradient for the line fill
        fill: 'origin',  // Fill under the line
        tension: 0.4,  // Smooth curve for the line
        pointBackgroundColor: '#6B52D4',  // Purple color for the points
        pointRadius: 6,  // Larger points
        pointHoverRadius: 8,  // Larger on hover
      }
    ]
  };

  // Line Chart Options for Daily Login Trend
  public lineChartOptions: ChartOptions | any = {
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
          min: 0,          // Start from 0
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