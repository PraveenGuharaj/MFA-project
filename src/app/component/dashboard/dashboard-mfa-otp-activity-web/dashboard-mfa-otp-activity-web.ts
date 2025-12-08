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
  selector: 'app-dashboard-mfa-otp-activity-web',
  imports: [
    CommonModule,
    MatCardModule,
    BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-mfa-otp-activity-web.html',
  styleUrl: './dashboard-mfa-otp-activity-web.scss',
})
export class DashboardMfaOtpActivityWeb {
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;
  @ViewChild('myChart', { static: false }) myChartElement!: ElementRef;
  @ViewChild('myDonutChart', { static: false }) myDonutChartElement!: ElementRef;

   public barChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',    // <-- VERTICAL BARS like screenshot
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false               // screenshot has NO vertical grid lines
        },
        ticks: {
          font: { size: 14 },
          color: "#444"                // same color style
        }
      },

      y: {
        stacked: true,
        min: 0,
        max: 12000,
        ticks: {
          stepSize: 3000,              // 0, 3000, 6000, 9000, 12000
          font: { size: 14 },
          color: "#777"
        },
        grid: {
          color: "#e5e5e5",            // light gray gridlines like screenshot
          drawBorder: false
        }
      }
    },

    plugins: {
      legend: {
        display: false                 // screenshot shows no legend
      }
    }
  };

  public barChartData: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // X-axis labels
    datasets: [
      {
        label: 'Mobile',
        data: [7200, 1500, 4500, 5600, 2300, 4700, 1400],       // purple bottom
        backgroundColor: () =>
          this.createStripedGradient('rgba(118,0,255,0.75)', 'rgba(118,0,255,0.75)'),
        borderRadius: 12
      },
      {
        label: 'Web',
        data: [2500, 3000, 3800, 3100, 7000, 3500, 2200],       // green top
        backgroundColor: () =>
          this.createStripedGradient('rgba(0,200,83,0.75)', 'rgba(0,200,83,0.75)'),
        borderRadius: 12
      }
    ]
  };

  
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
    this.initPieChart();

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
            // {
            //   data: [5500, 1500, 3500, 2000, 4000, 3000, 4500],  // 7 values for Mobile
            //   borderColor: '#6017EB99',
            //   backgroundColor: mobileGradient,
            //   fill: true,
            //   tension: 0.4,
            //   pointRadius: 0,
            //   borderWidth: 2,
            // },
            {
              data: [6000, 4500, 4000, 1500, 3000, 2000, 3500],  // 7 values for Web
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
                  size: 12,
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
                  size: 12,
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

  // add a property at component level:
  // private donutChart: any;

  initPieChart() {
    // make sure canvas element exists
    const canvas: HTMLCanvasElement = this.myDonutChartElement.nativeElement;
    if (!canvas) return;

    // destroy previous chart if exists
    if ((this as any).donutChart) {
      try { (this as any).donutChart.destroy(); } catch (e) { /* ignore */ }
      (this as any).donutChart = null;
    }

    // === FORCE CANVAS SIZE (important!) ===
    // set DOM attributes (pixel size used by Chart.js)
    canvas.width = 550;
    canvas.height = 550;

    // set inline style with !important to override global CSS rules
    canvas.setAttribute('style', 'width: 300px !important; height: 300px !important;');

    const ctx: any = canvas.getContext('2d');

    // ===== GRADIENT COLORS =====
    const greenGradient = ctx.createLinearGradient(0, 0, 0, 300);
    greenGradient.addColorStop(0, '#14CC4C');
    greenGradient.addColorStop(1, '#8DEBA9');

    const purpleGradient = ctx.createLinearGradient(0, 0, 0, 300);
    purpleGradient.addColorStop(0, '#5B21B6');
    purpleGradient.addColorStop(1, '#A78BFA');

    const redGradient = ctx.createLinearGradient(0, 0, 0, 300);
    redGradient.addColorStop(0, '#EF4444');
    redGradient.addColorStop(1, '#EB8D8F');

    // ===== WHITE DIAGONAL PATTERN =====
    function createDiagonalPattern() {
      const patternCanvas = document.createElement('canvas');
      patternCanvas.width = 12;
      patternCanvas.height = 12;

      const pctx = patternCanvas.getContext('2d')!;
      pctx.strokeStyle = 'rgba(255,255,255,0.35)';
      pctx.lineWidth = 2;
      pctx.beginPath();
      pctx.moveTo(0, 12);
      pctx.lineTo(12, 0);
      pctx.stroke();

      return pctx.createPattern(patternCanvas, 'repeat')!;
    }

    const diagonalPattern = createDiagonalPattern();

    // ===== PATTERN PLUGIN =====
    const donutPatternPlugin = {
      id: 'donutPatternPlugin',
      afterDatasetDraw(chart: any) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);

        meta.data.forEach((segment: any) => {
          ctx.save();

          ctx.beginPath();
          ctx.arc(segment.x, segment.y, segment.outerRadius, segment.startAngle, segment.endAngle);
          ctx.arc(segment.x, segment.y, segment.innerRadius, segment.endAngle, segment.startAngle, true);
          ctx.closePath();
          ctx.clip();

          ctx.fillStyle = diagonalPattern;
          ctx.fillRect(
            segment.x - segment.outerRadius,
            segment.y - segment.outerRadius,
            segment.outerRadius * 2,
            segment.outerRadius * 2
          );

          ctx.restore();
        });
      }
    };

    // ===== CENTER TOTAL TEXT =====
    const centerTextPlugin = {
      id: 'centerText',
      afterDraw(chart: any) {
        const { ctx } = chart;
        const width = chart.width;
        const height = chart.height;

        const total = 12342; // <-- you can change dynamically

        ctx.save();
        ctx.font = 'bold 28px Poppins';   // reduced so it fits 250px
        ctx.fillStyle = '#16003A';
        ctx.textAlign = 'center';
        ctx.fillText(total.toString(), width / 2, height / 2 - 6);

        ctx.font = '14px Poppins';
        ctx.fillStyle = '#7A7A7A';
        ctx.fillText('Requests', width / 2, height / 2 + 18);

        ctx.restore();
      }
    };

    // ===== FINAL DONUT CHART =====
    (this as any).donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Requests', 'Completed', 'Failed'],
        datasets: [
          {
            data: [45, 45, 5],  // <-- adjust values here
            backgroundColor: [greenGradient, purpleGradient, redGradient],
            borderWidth: 6,
            borderColor: '#F7F9FB',
            hoverBorderColor: '#F7F9FB'
          }
        ]
      },
      options: {
        rotation: 120,
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,    // <-- REQUIRED to use canvas pixel size
        plugins: {
          legend: { display: false }
        }
      },
      plugins: [donutPatternPlugin, centerTextPlugin]
    });
  }

  initChart() {
    this.barChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        // {
        //   label: 'Mobile',
        //   data: [8000, 1500, 4000, 5500, 2000, 4500, 2000],
        //   backgroundColor: this.createStripedGradient(
        //     'rgba(173, 141, 235, 1)',
        //     'rgba(96, 23, 235, 1)'
        //   ),
        //   borderRadius: 4
        // },
        {
          label: 'Web',
          data: [3000, 5500, 6000, 5700, 9000, 3800, 3600],
          backgroundColor: this.createStripedGradient(
            'rgba(141, 235, 169, 1)',
            'rgba(20, 204, 76, 1)'
          ),
          borderRadius: 4
        }
      ]
    };

    this.barChartOptions = {
      indexAxis: 'x',   // <--- IMPORTANT! This makes the bars vertical
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,   // screenshot has NO vertical grid lines
            drawBorder: false
          },
          ticks: {
            color: '#A2A3A5',
            font: {
              size: 14,
              weight: '400'
            },
            padding: 8
          }
        },
        y: {
          stacked: true,
          min: 0,
          max: 12000,         // screenshot scale
          ticks: {
            stepSize: 3000,   // 0, 3000, 6000, 9000, 12000
            color: '#A2A3A5',
            font: {
              size: 14,
              weight: '400'
            },
            padding: 8
          },
          grid: {
            display: true,     // screenshot has horizontal grid
            color: '#E5E5E5',
            drawBorder: false
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

    // --- Create Gradient Background ---
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // gradient.addColorStop(0, baseColor1);
    gradient.addColorStop(1, baseColor2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- Draw White Diagonal Stripes ---
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.30)';
    ctx.lineWidth = 2;

    for (let i = -40; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 40);
      ctx.lineTo(i + 40, 0);
      ctx.stroke();
    }

    // ---Create Pattern ---
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
