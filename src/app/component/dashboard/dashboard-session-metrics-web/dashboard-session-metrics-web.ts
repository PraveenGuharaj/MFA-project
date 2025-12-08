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
  selector: 'app-dashboard-session-metrics-web',
  imports: [
     CommonModule,
    MatCardModule,
    BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-session-metrics-web.html',
  styleUrl: './dashboard-session-metrics-web.scss',
})
export class DashboardSessionMetricsWeb {
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;
  @ViewChild('myChart', { static: false }) myChartElement!: ElementRef;
  @ViewChild('myDonutChart', { static: false }) myDonutChartElement!: ElementRef;
  @ViewChild('myBarChart', { static: false }) myBarChartElement!: ElementRef;

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
      // {
      //   label: 'Mobile',
      //   data: [7200, 1500, 4500, 5600, 2300, 4700, 1400],       // purple bottom
      //   backgroundColor: () =>
      //     this.createStripedGradient('rgba(240, 219, 144, 1)', 'rgba(240, 203, 67, 1)'),
      //   borderRadius: 4
      // },
      {
        label: 'Web',
        data: [2500, 3000, 3800, 3100, 7000, 3500, 2200],       // green top
        backgroundColor: () =>
          this.createStripedGradient('rgba(235, 141, 143, 1)', 'rgba(239, 68, 68, 1)'),
        borderRadius: 4
      }
    ]
  };

  ngAfterViewInit() {
    this.initializeLineChart();
    this.initPieChart();
    this.initAccountBarChart();

  }

  initAccountBarChart() {
    const canvas = this.myBarChartElement.nativeElement;
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
          // {
          //   label: 'Mobile',
          //   data: [6500, 6600, 6700, 6800, 6900, 7000, 7100],
          //   backgroundColor: purpleGradient,
          //   borderRadius: 4,
          //   maxBarThickness: 30
          // },
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
    canvas.setAttribute('style', 'width: 350px !important; height: 350px !important;');

    const ctx: any = canvas.getContext('2d');

    // ===== GRADIENT COLORS =====
    const greenGradient = ctx.createLinearGradient(0, 0, 0, 300);
    greenGradient.addColorStop(0, 'rgba(235, 141, 143, 1)');
    greenGradient.addColorStop(1, 'rgba(239, 68, 68, 1)');

    const purpleGradient = ctx.createLinearGradient(0, 0, 0, 300);
    purpleGradient.addColorStop(0, 'rgba(20, 204, 76, 1)');
    purpleGradient.addColorStop(1, 'rgba(141, 235, 169, 1)');

    const redGradient = ctx.createLinearGradient(0, 0, 0, 300);
    redGradient.addColorStop(0, 'rgba(240, 219, 144, 1)');
    redGradient.addColorStop(1, 'rgba(240, 203, 67, 1)');

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
        {
          label: 'Mobile',
          data: [8000, 1500, 4000, 5500, 2000, 4500, 2000],
          backgroundColor: this.createStripedGradient(
            'rgba(240, 219, 144, 1)',
            'rgba(240, 203, 67, 1)'
          ),
          borderRadius: 4
        },
        {
          label: 'Web',
          data: [3000, 5500, 6000, 5700, 9000, 3800, 3600],
          backgroundColor: this.createStripedGradient(
            'rgba(235, 141, 143, 1)',
            'rgba(239, 68, 68, 1)'
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
