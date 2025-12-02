import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart as ChartJS } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
    MatIconModule,
    NgApexchartsModule,
  ],
  templateUrl: './dashboard-user-overview.html',
  styleUrls: ['./dashboard-user-overview.scss'],
})
export class DashboardUserOverview implements OnInit {
  @ViewChild('myChart', { static: false }) myChartElement!: ElementRef;
  @ViewChild('myDonutChart', { static: false }) myDonutChartElement!: ElementRef;

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
    gradientWeb?.addColorStop(0, '#6017EB');
    gradientWeb?.addColorStop(1, '#AD8DEB');
    this.doughnutChartData.datasets[0].backgroundColor = [gradientMobile, gradientWeb];
    this.barChartData.datasets[0].backgroundColor = gradientMobile;
    this.barChartData.datasets[1].backgroundColor = gradientWeb;
  }

  ngAfterViewInit() {
    // Bar Chart setup
    const ctx = this.myChartElement.nativeElement.getContext('2d');

    // Create gradient for Web (Purple)
    const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPurple.addColorStop(0, 'rgba(119, 0, 255, 0.7)');
    gradientPurple.addColorStop(1, 'rgba(120, 0, 180, 0.4)');

    // Create gradient for Mobile (Green)
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGreen.addColorStop(0, 'rgba(77, 255, 0, 0.7)');
    gradientGreen.addColorStop(1, 'rgba(0, 200, 0, 0.4)');

    // Create pattern function for a single left-to-right diagonal line
    function createSingleDiagonalPattern() {
      const canvas = document.createElement('canvas');
      const ctxPattern = canvas.getContext('2d')!;
      const patternSize = 10;

      // Set canvas size for the pattern
      canvas.width = patternSize;
      canvas.height = patternSize;

      // Increase stroke width for better visibility
      const strokeWidth = 2; // You can change this value to adjust the thickness

      // Draw a diagonal line from left to right
      ctxPattern.strokeStyle = 'rgba(217, 217, 217, 1)';
      ctxPattern.lineWidth = strokeWidth;
      ctxPattern.beginPath();
      ctxPattern.moveTo(0, patternSize); // Start at bottom-left
      ctxPattern.lineTo(patternSize, 0); // Draw a diagonal line to top-right
      ctxPattern.stroke();

      return ctx.createPattern(canvas, 'repeat');
    }

    // Create the pattern for the bars
    const patternGreen = createSingleDiagonalPattern();
    const patternPurple = createSingleDiagonalPattern();

    const patternPlugin = {
      id: 'patternPlugin',
      beforeDraw: (chart: any) => {
        const ctx = chart.ctx;

        // Draw on the bar chart
        chart.data.datasets.forEach((dataset: any, i: number) => {
          const bars = chart.getDatasetMeta(i).data;
          bars.forEach((bar: any) => {
            // Draw the gradient base
            ctx.save();
            ctx.fillStyle = i === 0 ? gradientPurple : gradientGreen;  // Swap order here
            ctx.fillRect(bar.x - bar.width / 2, bar.y, bar.width, bar.height);

            // Draw the pattern overlay on top of the gradient
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = i === 0 ? patternPurple : patternGreen;
            ctx.fillRect(bar.x - bar.width / 2, bar.y, bar.width, bar.height);
            ctx.restore();
          });
        });

        // Draw on the donut chart
        if (chart.config.type === 'doughnut') {
          const dataset = chart.data.datasets[0];
          const total = dataset.data.reduce((sum: number) => sum + 1, 0);

          chart.getDatasetMeta(0).data.forEach((segment: any, i: number) => {
            const { x, y, startAngle, endAngle, outerRadius, innerRadius } = segment;

            // Create a pattern for each segment
            const pattern = i === 0 ? patternPurple : patternGreen;

            ctx.save();
            ctx.fillStyle = pattern;
            ctx.beginPath();
            ctx.arc(x, y, outerRadius, startAngle, endAngle);
            ctx.arc(x, y, innerRadius, endAngle, startAngle, true); // Counter-clockwise
            ctx.closePath();

            ctx.fill();
            ctx.restore();
          });
        }
      }
    };

    // Create the bar chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Web',  // Now first
            data: [6000, 9500, 8500, 7200, 9800, 6800, 7500],
            backgroundColor: gradientPurple,  // Use gradient as the base color
            borderWidth: 0,  // No border
            borderRadius: [4, 4, 0, 0],  // Top-left and top-right border radius
            barPercentage: 0.8,  // Adjust bar width
          },
          {
            label: 'Mobile',
            data: [8000, 11000, 9000, 7000, 9500, 7500, 8000],
            backgroundColor: gradientGreen,
            borderWidth: 0,
            borderRadius: [4, 4, 0, 0],
            barPercentage: 0.8,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 12000,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
      plugins: [patternPlugin], // Register the custom plugin here
    });

    // Donut Chart setup
    const ctxdognut = this.myDonutChartElement.nativeElement.getContext('2d');

    // Create gradient for Web (Purple)
    const gradientdognuPurple = ctxdognut.createLinearGradient(0, 0, 0, 400);
    gradientdognuPurple.addColorStop(0, 'rgba(119, 0, 255, 0.7)');
    gradientdognuPurple.addColorStop(1, 'rgba(120, 0, 180, 0.4)');

    // Create gradient for Mobile (Green)
    const gradientdognutGreen = ctxdognut.createLinearGradient(0, 0, 0, 400);
    gradientdognutGreen.addColorStop(0, 'rgba(77, 255, 0, 0.7)');
    gradientdognutGreen.addColorStop(1, 'rgba(0, 200, 0, 0.4)');

    new Chart(ctxdognut, {
      type: 'doughnut',
      data: {
        labels: ['Mobile', 'Web'],
        datasets: [{
          data: [50, 50],
          backgroundColor: [gradientdognutGreen, gradientdognuPurple],
          borderWidth: 2,
          borderColor: ['white', 'white'],
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',
        rotation: 90,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          }
        },
      },
      plugins: [patternPlugin],
    });

  }
}