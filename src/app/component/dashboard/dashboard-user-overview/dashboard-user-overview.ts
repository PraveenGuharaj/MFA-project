import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart, registerables } from 'chart.js';
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
    // BaseChartDirective,
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
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;
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
        // this.initAccountBarChart();
    // Bar Chart setup
    const ctx = this.myChartElement.nativeElement.getContext('2d');

    // Create gradient for Web (Purple)
    const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPurple.addColorStop(0, '#6D28D9');
    gradientPurple.addColorStop(1, '#A78BFA');

    // Create gradient for Mobile (Green)
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGreen.addColorStop(0, '#22C55E');
    gradientGreen.addColorStop(1, '#86EFAC');

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

    // Custom plugin to draw the pattern on the bars and donut chart segments
    const patternPlugin = {
      id: 'patternPlugin',
      beforeDraw: (chart: any) => {
        const ctx = chart.ctx; // Correctly accessing ctx from the chart instance

        // Draw on the bar chart
        chart.data.datasets.forEach((dataset: any, i: number) => {
          const bars = chart.getDatasetMeta(i).data;
          bars.forEach((bar: any) => {
            // Draw the gradient base
            ctx.save();
            ctx.fillStyle = i === 0 ? gradientPurple : gradientGreen;  // Swap order here
            ctx.fillRect(bar.x - bar.width / 2, bar.y, bar.width, bar.height);

            // Draw the pattern overlay on top of the gradient
            ctx.globalCompositeOperation = 'source-over'; // Apply pattern on top of gradient
            ctx.fillStyle = i === 0 ? patternPurple : patternGreen;  // Swap order here
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
            const pattern = i === 0 ? patternPurple : patternGreen; // Select pattern for each section

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
            label: 'Mobile',  // Now second
            data: [8000, 11000, 9000, 7000, 9500, 7500, 8000],
            backgroundColor: gradientGreen,  // Use gradient as the base color
            borderWidth: 0,
            borderRadius: [4, 4, 0, 0],  // Top-left and top-right border radius
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
          data: [50, 50],  // Both Mobile and Web are set to 50 each
          backgroundColor: [gradientdognutGreen, gradientdognuPurple],  // Gradient colors for each section
          borderWidth: 2,  // Create a gap between segments by adding a border
          borderColor: ['white', 'white'],  // Set white color between Mobile and Web
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',  // This creates the "hole" in the middle for the donut chart
        rotation: 90, // Rotate the donut chart by 180 degrees (half circle)
        plugins: {
          legend: {
            position: 'top',  // Position of the legend
          },
          tooltip: {
            enabled: true,  // Show tooltips when hovering over each section
          }
        },
      },
      plugins: [patternPlugin], // Register the same plugin to apply pattern
    });
    this.initializeLineChart();

  }


    initAccountBarChart() {
    const canvas = this.myChartElement.nativeElement;
    const ctx = canvas.getContext('2d');

    Chart.register(...registerables);

    // -------- GRADIENT FILLS --------
    const purpleGradient = ctx.createLinearGradient(0, 0, 0, 300);
    purpleGradient.addColorStop(0, '#6D28D9');
    purpleGradient.addColorStop(1, '#A78BFA');

    const greenGradient = ctx.createLinearGradient(0, 0, 0, 300);
    greenGradient.addColorStop(0, '#22C55E');
    greenGradient.addColorStop(1, '#86EFAC');

    // -------- DIAGONAL WHITE PATTERN --------
    function makePattern() {
      const pc = document.createElement('canvas');
      pc.width = 14;
      pc.height = 14;
      const pctx: any = pc.getContext('2d');

      pctx.strokeStyle = 'rgba(255,255,255,0.35)';
      pctx.lineWidth = 2;

      pctx.beginPath();
      pctx.moveTo(0, 14);
      pctx.lineTo(14, 0);
      pctx.stroke();

      return pctx.createPattern(pc, 'repeat');
    }

    const stripePattern = makePattern();

    // -------- APPLY PATTERN TO BARS --------
    const patternPlugin = {
      id: "patternPlugin",
      afterDatasetsDraw(chart: any, args: any, options: any) {
        const { ctx } = chart;

        chart.data.datasets.forEach((dataset: any, datasetIndex: any) => {
          const meta = chart.getDatasetMeta(datasetIndex);

          meta.data.forEach((bar: any) => {
            const x = bar.x - 14;  // width = 28px → 28/2
            const y = bar.y;
            const width = 48;
            const height = bar.base - bar.y;

            ctx.save();

            // Rounded rect (top-left & top-right only)
            const tl = 4;  // top-left radius
            const tr = 4;  // top-right radius
            const br = 0;  // bottom-right
            const bl = 0;  // bottom-left

            ctx.beginPath();
            ctx.moveTo(x + tl, y);

            ctx.lineTo(x + width - tr, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + tr);

            ctx.lineTo(x + width, y + height - br);
            ctx.quadraticCurveTo(x + width, y + height, x + width - br, y + height);

            ctx.lineTo(x + bl, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - bl);

            ctx.lineTo(x, y + tl);
            ctx.quadraticCurveTo(x, y, x + tl, y);

            ctx.closePath();
            ctx.clip();

            ctx.fillStyle = stripePattern;
            ctx.fillRect(x, y, width, height);

            ctx.restore();
          });
        });
      }
    };


    // -------- FINAL CHART --------
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Mobile',
            data: [6500, 6600, 6700, 6800, 6900, 7000, 7100],
            backgroundColor: purpleGradient,
            borderRadius: 4,
            maxBarThickness: 30
          },
          {
            label: 'Web',
            data: [9300, 9400, 9500, 9600, 9700, 9800, 9900],
            backgroundColor: greenGradient,
            borderRadius: 4,
            maxBarThickness: 30
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },

        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#8E8E8E',
              font: { size: 14 }
            }
          },
          y: {
            min: 0,
            max: 12000,
            ticks: {
              stepSize: 3000,
              color: '#8E8E8E',
              font: { size: 13 }
            },
            grid: {
              color: '#E5E7EB'
            }
          }
        }
      },

      plugins: [patternPlugin]
    });
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
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: [1500, 5900, 2000, 6000, 10000, 8000, 6000],  // 7 values for Mobile
                borderColor: '#6017EB99',
                backgroundColor: mobileGradient,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 2,
              },
              {
                data: [6000, 4000, 9000, 6000, 2000, 7000, 2000],  // 7 values for Web
                borderColor: '#29CC5A99',
                backgroundColor: webGradient,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 2,
              }
            ]
          },
  
          options: {
            responsive: true,
            plugins: {
              tooltip: {
                enabled: true,
                callbacks: {
                  title: function () { return ''; },
                  label: function (tooltipItem) { return `${tooltipItem.raw}`; }
                }
              },
              legend: { display: false }
            },
  
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 14,
                    weight: 'normal',
                    family: 'Arial',
                  },
                  color: '#A2A3A5',
                },
                grid: { color: '#E6E6E6', display: false }
              },
  
              y: {
                min: 0,
                max: 12000,     // Ensures 12000 is shown
                ticks: {
                  stepSize: 3000,   // 0, 3000, 6000, 9000, 12000
                  font: {
                    size: 14,
                    weight: 'normal',
                    family: 'Arial',
                  },
                  color: '#A2A3A5',
                  callback: function (value) { return value; }
                },
                grid: { color: '#E6E6E6' }
              }
            },
  
            onClick: (event: any) => {
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