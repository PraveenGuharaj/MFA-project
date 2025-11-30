import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChartData, ChartOptions, CategoryScale, LinearScale, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, DoughnutController, ArcElement } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart as ChartJS } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


@Component({
  selector: 'app-dashboard-mfa-otp-activity',
  imports: [CommonModule,
    CommonModule,
    MatCardModule,
    BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-mfa-otp-activity.html',
  styleUrl: './dashboard-mfa-otp-activity.scss',
})
export class DashboardMfaOtpActivity {
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

  // Chart Options for MFA Usage Trend
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

  public otpChartData: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // X-Axis: Days of the week
    datasets: [
      {
        data: [9000, 9500, 8000, 9800, 9200, 11000, 12000],  // Web OTP/MFA activity data (Purple)
        label: 'Web',
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#6017EB');  // Start color (purple)
          gradient.addColorStop(1, '#AD8DEB');  // End color (light purple)
          return gradient;
        },
        borderColor: '#9A6DFF',
        borderWidth: 1,
        stack: 'stack0'  // Stack it below Mobile activity
      },
      {
        data: [2000, 3000, 2500, 4000, 3500, 5000, 6000],  // Mobile OTP/MFA activity data (Green)
        label: 'Mobile',
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#14CC4C');  // Start color (green)
          gradient.addColorStop(1, '#8DEBA9');  // End color (light green)
          return gradient;
        }, borderColor: '#14CC4C',
        borderWidth: 1,
        stack: 'stack0'  // Stack it above Web activity
      }
    ]
  };

  // Chart Options for OTP/MFA Activity Trend
  public otpChartOptions: ChartOptions | any = {
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
        stacked: true,  // Enable stacking
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

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Requests', 'Completed', 'Failed'],  // Labels for the segments
    datasets: [
      {
        data: [12342, 8900, 1500],  // Requests, Completed, Failed values
        backgroundColor: [
          this.createGradient('green'),     // Requests Gradient
          this.createGradient('completed'), // Completed Gradient
          this.createGradient('red')        // Failed Gradient
        ],
        borderColor: ['white', 'white', 'white'],  // White borders between segments
        borderWidth: 2,
      }
    ]
  };

  // Doughnut chart options
  public doughnutChartOptions: ChartOptions | any = {
    responsive: true,
    rotation: -240,  // Rotate the chart so the first slice starts on the right (3 o'clock)
    circumference: 360, // Full circle
    plugins: {
      legend: {
        position: 'top',  // Position the legend on top
        labels: {
          font: {
            size: 14  // Font size for the legend labels
          }
        }
      },
      tooltip: {
        enabled: true,  // Enable tooltips
        mode: 'nearest',  // Nearest tooltip on hover
        intersect: false,  // Don't hide tooltip if not directly on the chart line
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.raw} ${tooltipItem.label}`;  // Show value and label
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

  // Function to create the gradient
  createGradient(type: string): CanvasGradient {
    const ctx = document.createElement('canvas').getContext('2d');
    let gradient: CanvasGradient | any;

    // Gradient for Requests (Green)
    if (type === 'green') {
      gradient = ctx?.createLinearGradient(0, 0, 0, 200);
      gradient?.addColorStop(0, '#14CC4C');  // Start color (light green)
      gradient?.addColorStop(1, '#8DEBA9');  // End color (dark green)
    }
    // Gradient for Completed (Purple)
    else if (type === 'completed') {
      gradient = ctx?.createLinearGradient(0, 0, 0, 200);
      gradient?.addColorStop(0, '#AD8DEB');  // Start color (light purple)
      gradient?.addColorStop(1, '#6017EB');  // End color (dark purple)
    }
    // Gradient for Failed (Red)
    else if (type === 'red') {
      gradient = ctx?.createLinearGradient(0, 0, 0, 200);
      gradient?.addColorStop(0, '#EB8D8F');  // Start color (light red)
      gradient?.addColorStop(1, '#EF4444');  // End color (dark red)
    }
    return gradient!;
  }
  constructor() { }

  ngOnInit(): void { }

}
