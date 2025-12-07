import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart, ScriptableContext, registerables } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
import { MatIconModule } from '@angular/material/icon';
import ChartDataLabels from 'chartjs-plugin-datalabels';


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
  Filler,
  // ChartDataLabels   
);

@Component({
  selector: 'app-dashboard-digital-journey-insights',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard-digital-journey-insights.html',
  styleUrl: './dashboard-digital-journey-insights.scss',
})
export class DashboardDigitalJourneyInsights {
  @ViewChild('funnelChart') funnelChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('journeyChart') journeyChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;

  chart!: Chart;

  ngAfterViewInit() {
    this.renderChart();
    this.renderLineChart();
  }

  renderLineChart() {
    const ctx = this.journeyChart.nativeElement.getContext('2d')!;

    const labels = ['Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17'];
    const started = [620, 600, 600, 680, 620, 640, 650];
    const completed = [320, 340, 360, 452, 430, 410, 425];
    const broken = [180, 160, 190, 152, 170, 165, 172];

    const gradientPurple = this.createGradient(ctx, '#6017EB', '#FFFFFF');
    const gradientGreen = this.createGradient(ctx, '#29CC5A', '#FFFFFF');
    const gradientRed = this.createGradient(ctx, '#EF4444', '#FFFFFF');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Started',
            data: started,
            backgroundColor: gradientPurple,
            borderColor: '#6017EB',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 8,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: '#6017EB',
          },
          {
            label: 'Completed',
            data: completed,
            backgroundColor: gradientGreen,
            borderColor: '#14CC4C',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 8,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: '#14CC4C',
          },
          {
            label: 'Broken',
            data: broken,
            backgroundColor: gradientRed,
            borderColor: '#EE595A',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 8,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: '#EE595A',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'nearest',
          intersect: false,
        },
        plugins: {
          legend: { display: false },

          tooltip: {
            enabled: true,
            backgroundColor: '#FFFFFF',
            bodyColor: '#1C174A',
            borderColor: '#E0E0E0',
            borderWidth: 1,
            displayColors: false,
            padding: 12,
            titleFont: { weight: 'bold', size: 14 },
            bodyFont: { size: 13 },
          },
        },
        scales: {
          x: {
            ticks: { color: '#8D8D8D', font: { size: 13 } },
            grid: { display: false },
          },
          y: {
            ticks: { color: '#A2A3A5', font: { size: 12 } },
            grid: { color: '#E6E6E6' },
            beginAtZero: true,
          },
        },
      },
    });
  }

  createGradient(ctx: CanvasRenderingContext2D, topColor: string, bottomColor: string) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, topColor + '66');
    gradient.addColorStop(1, bottomColor + '00');
    return gradient;
  }
  // renderChart() {
  //   const ctx = this.funnelChart.nativeElement.getContext('2d')!;

  //   const labels = ['Started', 'Completed', 'Broken Journey'];
  //   const values = [5500, 8000, 4000];
  //   const percentages = ['(100%)', '(25.2%)', '(74.8%)'];

  //   const gradients = [
  //     this.createStripedGradient(
  //       '#6017EB',
  //       '#AD8DEB'
  //     ),
  //     this.createStripedGradient(
  //       '#14CC4C',
  //       '#8DEBA9'
  //     ),
  //     this.createStripedGradient(
  //       '#EE595A',
  //       '#EB8C8E'
  //     ),
  //   ];

  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels,
  //       datasets: [{
  //         data: values,
  //         backgroundColor: gradients,
  //         borderRadius: 4,
  //         borderSkipped: false
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: { display: false },
  //         tooltip: { enabled: false },
  //         datalabels: {
  //           anchor: 'end',
  //           align: 'end',
  //           formatter: (val: number, ctx: any) => {
  //             const index = ctx.dataIndex;
  //             return `${val.toLocaleString()}\n${percentages[index]}`;
  //           },
  //           color: '#1C174A',
  //           font: {
  //             size: 16,
  //             weight: 'bold',
  //             family: 'Arial'
  //           },
  //           textStrokeColor: 'white',
  //           textStrokeWidth: 3,
  //         }
  //       },
  //       scales: {
  //         x: {
  //           grid: { display: false },
  //           ticks: {
  //             color: '#1C174A',
  //             font: { size: 16, weight: 600 }
  //           }
  //         },
  //         y: {
  //           min: 0,
  //           max: 10000,
  //           ticks: {
  //             stepSize: 2500,
  //             color: '#A2A3A5',
  //             font: { size: 12 }
  //           },
  //           grid: { color: '#E6E6E6' }
  //         }
  //       }
  //     }
  //   });
  // }

  renderChart() {
    const ctx = this.funnelChart.nativeElement.getContext('2d')!;

    const labels = ['Started', 'Completed', 'Broken Journey'];
    const values = [5500, 6034, 4322];
    const percentages = ['(100%)', '(25.2%)', '(74.8%)'];

    const gradients = [
      this.createStripedGradient('#6017EB', '#AD8DEB'),
      this.createStripedGradient('#14CC4C', '#8DEBA9'),
      this.createStripedGradient('#EE595A', '#EB8C8E'),
    ];

    new Chart(ctx, {
      type: 'bar',

      // 🔥 LOCAL PLUGIN REGISTRATION — only affects this chart
      plugins: [ChartDataLabels],

      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: gradients,
          borderRadius: 10,
          borderSkipped: false
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },

          // 🔥 Local DataLabel Styling
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 4,
            formatter: (val: number, ctx: any) => {
              const index = ctx.dataIndex;
              return `${val.toLocaleString()}\n${percentages[index]}`;
            },
            color: '#1C174A',
            font: {
              size: 16,
              weight: 'bold',
              family: 'Arial'
            }
          }
        },

        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#1C174A',
              font: { size: 14, weight: 600 }
            }
          },
          y: {
            min: 0,
            max: 10000,
            ticks: {
              stepSize: 2500,
              color: '#A2A3A5',
              font: { size: 12 }
            },
            grid: { color: '#E6E6E6' }
          }
        }
      }
    });
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
}