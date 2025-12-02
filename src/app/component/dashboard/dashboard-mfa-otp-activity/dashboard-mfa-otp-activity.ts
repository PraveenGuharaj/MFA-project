import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChartData, ChartOptions, CategoryScale, LinearScale, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, DoughnutController, ArcElement, registerables, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';  // Importing BaseChartDirective for standalone components
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
    // BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-mfa-otp-activity.html',
  styleUrl: './dashboard-mfa-otp-activity.scss',
})
export class DashboardMfaOtpActivity {
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;
  public barChartOptions: any = {
    indexAxis: 'x', // Keep the horizontal bar chart orientation
    responsive: true,
    scales: {
      x: {
        stacked: true,
        // Set the x-axis to have labels: Mon, Tue, Wed, Thu, Fri, SabarChartOptionst, Sun
        ticks: {
          // Optional: format the ticks if needed
          callback: function (value: any) {
            const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            return labels[value];
          }
        }
      },
      y: {
        stacked: true,
        // Set the y-axis to show ticks as: 0, 3000, 6000, 9000, 12000
        ticks: {
          // Optional: set the step size for the ticks (to control interval between ticks)
          stepSize: 3000,
          max: 12000,
          min: 0,
          callback: function (value: any) {
            return value; // Directly display the value on the y-axis
          }
        }
      }
    }
  };

  public barChartData: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Mobile',
        data: [3000, 6000, 7000, 6500, 2000, 7500, 7200],
        backgroundColor: (ctx: any) => {
          return this.createPattern('rgba(118, 0, 255, 0.5)'); // purple stripes
        },
        borderRadius: 10,
      },
      {
        label: 'Web',
        data: [2000, 3500, 3000, 3200, 1500, 3800, 3600],
        backgroundColor: (ctx: any) => {
          return this.createPattern('rgba(0, 200, 83, 0.5)'); // green stripes
        },
        borderRadius: 10,
      }
    ]
  };

  constructor() { }

  ngOnInit(): void { }



  createPattern(color: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 12;
    canvas.height = 12;

    const ctx = canvas.getContext('2d')!;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(0, 12);
    ctx.lineTo(12, 0);
    ctx.stroke();

    return ctx.createPattern(canvas, 'repeat');
  }


  ngAfterViewInit() {
    this.initChart();
    this.initializeLineChart();
  }


  initializeLineChart() {
    if (this.myLineChartElement && this.myLineChartElement.nativeElement) {
      const ctxLineChart = this.myLineChartElement.nativeElement.getContext('2d');
      Chart.register(...registerables);

      // Gradient fill for the mobile and web lines
      const mobileGradient = ctxLineChart.createLinearGradient(0, 0, 0, 400);
      mobileGradient.addColorStop(0, '#6017EB99');
      mobileGradient.addColorStop(1, '#FFFFFF00');

      const webGradient = ctxLineChart.createLinearGradient(0, 0, 0, 400);
      webGradient.addColorStop(0, '#29CC5A99');
      webGradient.addColorStop(1, '#FFFFFF00');

      // Create the line chart
      const lineChart: any = new Chart(ctxLineChart, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],  // Adjusted the labels based on your data size
          datasets: [
            {
              data: [5500, 1500, 3500, 2000, 4000], // Updated mobile data
              borderColor: '#6017EB99', // Mobile line color
              backgroundColor: mobileGradient, // Mobile gradient fill
              fill: true, // Enables the gradient fill
              tension: 0.4,
              pointRadius: 0, // Set pointRadius to 0 to remove dots
              borderWidth: 2, // To make the line more visible
            },
            {
              data: [9000, 5000, 8000, 3500, 9000], // Updated web data
              borderColor: '#29CC5A99', // Web line color
              backgroundColor: webGradient, // Web gradient fill
              fill: true, // Enables the gradient fill
              tension: 0.4,
              pointRadius: 0, // Set pointRadius to 0 to remove dots
              borderWidth: 2, // To make the line more visible
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              enabled: true,  // Keep tooltip enabled
              callbacks: {
                // Override the default tooltip title (dataset label) and hide it
                title: function (tooltipItems) {
                  return '';  // This removes the dataset label from the tooltip
                },
                // Custom label to show only the value
                label: function (tooltipItem) {
                  return `${tooltipItem.raw}`;  // Show only the data value
                }
              }
            },
            legend: {
              display: false,  // Hides the legend completely (Mobile, Web)
            }
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 14,    // Set the font size for the X-axis
                  weight: 'normal', // Set the font weight for the X-axis (use 'normal' instead of 400)
                  family: 'Arial',  // You can customize the font family if needed
                },
                color: '#A2A3A5',  // Set the color for the X-axis labels
              },
              grid: {
                color: '#E6E6E6',
              }
            },
            y: {
              ticks: {
                font: {
                  size: 14,    // Set the font size for the Y-axis
                  weight: 'normal', // Set the font weight for the Y-axis (use 'normal' instead of 400)
                  family: 'Arial',  // You can customize the font family if needed
                },
                color: '#A2A3A5',  // Set the color for the Y-axis labels
                stepSize: 3000,
                callback: function (value) {
                  return value; // This ensures the tick values are displayed correctly
                }
              },
              grid: {
                color: '#E6E6E6',
              }
            }
          },
          onClick: (event: any) => {
            // Only show dotted line on click
            const activePoints = lineChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
            if (activePoints.length > 0) {
              const firstPoint = activePoints[0];
              this.showDottedLine(firstPoint, event);
            }
          }
        }
      });
    }
  }

  initChart() {
    this.barChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Mobile',
          data: [3000, 6000, 7000, 6500, 2000, 7500, 7200],
          backgroundColor: this.createStripedGradient(
            'rgba(173, 141, 235, 1)',
            'rgba(96, 23, 235, 1)'
          ),
          borderRadius: 4
        },
        {
          label: 'Web',
          data: [2000, 3500, 3000, 3200, 1500, 3800, 3600],
          backgroundColor: this.createStripedGradient(
            'rgba(141, 235, 169, 1)',
            'rgba(20, 204, 76, 1)'
          ),
          borderRadius: 4
        }
      ]
    };

    this.barChartOptions = {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: true,
            drawBorder: false
          },
          ticks: {
            color: '#A2A3A5',       // text color
            font: {
              size: 14,
              weight: '400'
            },
            padding: 8
          }
        },
        y: {
          stacked: true,
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: '#A2A3A5',       // text color
            font: {
              size: 14,             // font size
              weight: '400'         // font weight (400, 500, 600, bold)
            },
            padding: 8              // optional: spacing between labels & axis
          }
        }
      }
    };

  }

  createStripedGradient(baseColor1: string, baseColor2: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 40;

    const ctx = canvas.getContext('2d')!;

    // --- 1) Create Gradient Background ---
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // gradient.addColorStop(0, baseColor1);
    gradient.addColorStop(1, baseColor2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- 2) Draw White Diagonal Stripes ---
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.30)';
    ctx.lineWidth = 2;

    for (let i = -40; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 40);
      ctx.lineTo(i + 40, 0);
      ctx.stroke();
    }

    // --- 3) Create Pattern ---
    return ctx.createPattern(canvas, 'repeat')!;
  }
  showDottedLine(firstPoint: any, event: any) {
    const ctx = this.myLineChartElement.nativeElement.getContext('2d');
    const x = event.offsetX;
    const y = event.offsetY;

    ctx.clearRect(0, 0, this.myLineChartElement.nativeElement.width, this.myLineChartElement.nativeElement.height); // Clear previous dotted lines

    ctx.beginPath();
    ctx.setLineDash([5, 5]); // Dotted line
    ctx.moveTo(x, 0);
    ctx.lineTo(x, this.myLineChartElement.nativeElement.height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.stroke();
    ctx.setLineDash([]); // Reset line style
  }


}
