import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart, ScriptableContext, registerables } from 'chart.js';
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
  @ViewChild('myChart', { static: false }) myChartElement!: ElementRef;
  @ViewChild('myDonutChart', { static: false }) myDonutChartElement!: ElementRef;
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;


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

  public barChartOptions: any = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };




  createGradient(startColor: string, endColor: string): CanvasGradient {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx?.createLinearGradient(0, 0, 400, 0);
    gradient?.addColorStop(0, startColor);
    gradient?.addColorStop(1, endColor);
    return gradient!;
  }

  ngAfterViewInit() {
    this.initChart();
    this.initializeLineChart();
    const ctx = this.myDonutChartElement.nativeElement.getContext('2d');


    const greenGradient = ctx.createLinearGradient(0, 0, 0, 300);
    greenGradient.addColorStop(0, '#14CC4C');
    greenGradient.addColorStop(1, '#8DEBA9');

    const redGradient = ctx.createLinearGradient(0, 0, 0, 300);
    redGradient.addColorStop(0, '#EB8D8F');
    redGradient.addColorStop(1, '#EF4444');

    // Diagonal pattern function
    function createDiagonalPattern(color: string) {
      const patternCanvas = document.createElement('canvas');
      patternCanvas.width = 12;
      patternCanvas.height = 12;
      const pctx = patternCanvas.getContext('2d')!;
      pctx.strokeStyle = color;
      pctx.lineWidth = 2;
      pctx.beginPath();
      pctx.moveTo(0, 12);
      pctx.lineTo(12, 0);
      pctx.stroke();
      return pctx.createPattern(patternCanvas, 'repeat')!;
    }

    const greenPattern = createDiagonalPattern('rgba(255,255,255,0.35)');
    const redPattern = createDiagonalPattern('rgba(255,255,255,0.35)');

    // Donut pattern plugin
    const donutPatternPlugin = {
      id: 'donutPatternPlugin',
      afterDatasetDraw(chart: any) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);

        meta.data.forEach((seg: any, i: any) => {
          ctx.save();

          // Clip to segment area
          ctx.beginPath();
          ctx.arc(seg.x, seg.y, seg.outerRadius, seg.startAngle, seg.endAngle);
          ctx.arc(seg.x, seg.y, seg.innerRadius, seg.endAngle, seg.startAngle, true);
          ctx.closePath();
          ctx.clip();

          // Fill pattern over gradient
          ctx.fillStyle = i === 0 ? greenPattern : redPattern;
          ctx.fillRect(seg.x - seg.outerRadius, seg.y - seg.outerRadius, seg.outerRadius * 2, seg.outerRadius * 2);

          ctx.restore();
        });
      }
    };
    const centerTextPlugin = {
      id: 'centerText',
      afterDraw(chart: any) {
        const { ctx } = chart;

        const x = chart.width / 2;
        const y = chart.height / 2;

        ctx.save();
        ctx.font = 'bold 38px Poppins';
        ctx.fillStyle = '#16003A';
        ctx.textAlign = 'center';
        // ctx.fillText('18324', x, y - 5);

        ctx.font = '18px Poppins';
        ctx.fillStyle = '#7A7A7A';
        // ctx.fillText('Successful', x, y + 25);
        ctx.restore();
      }
    };

    //  Create donut chart
    const donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Successful', 'Failed'],
        datasets: [{
          data: [18324, 2500],
          backgroundColor: [greenGradient, redGradient],
          borderWidth: 6,
          borderColor: '#F7F9FB',
          hoverBorderColor: '#F7F9FB'
        }]
      },
      options: {
        cutout: '70%',
        rotation: -210,
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      },
      plugins: [donutPatternPlugin]
    });

    // 5️ Center Text
    Chart.register({
      id: 'centerText',
      afterDraw(chart: any) {
        const { ctx } = chart;
        const width = chart.width;
        const height = chart.height;

        ctx.save();
        ctx.font = 'bold 38px Poppins';
        ctx.fillStyle = '#16003A';
        ctx.textAlign = 'center';
        // ctx.fillText('18324', width / 2, height / 2 - 5);

        ctx.font = '18px Poppins';
        ctx.fillStyle = '#7A7A7A';
        // ctx.fillText('Successful', width / 2, height / 2 + 25);
        ctx.restore();
      }
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

  createPatternWithBackground(bgColor: string, stripeColor: string) {
    const size = 5;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    // background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // stripes
    ctx.strokeStyle = stripeColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(size, 0);
    ctx.stroke();

    return ctx.createPattern(canvas, 'repeat');
  }

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