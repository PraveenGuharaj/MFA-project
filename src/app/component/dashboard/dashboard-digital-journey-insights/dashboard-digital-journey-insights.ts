import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { AdminCenterService } from '../../admin-center/admin-center-service';

Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

@Component({
  selector: 'app-dashboard-digital-journey-insights',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard-digital-journey-insights.html',
  styleUrl: './dashboard-digital-journey-insights.scss',
})
export class DashboardDigitalJourneyInsights {
  @ViewChild('funnelChart') funnelChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('journeyChart') journeyChart!: ElementRef<HTMLCanvasElement>;

  barChart!: Chart;
  lineChart!: Chart;

  constructor(private adminCenterService: AdminCenterService) { }

  /* -------------------- LIFECYCLE -------------------- */

  ngOnInit() {
    this.getOnboardingCount(); // BAR CHART (API)
  }

  ngAfterViewInit() {
    this.renderLineChart(); // LINE CHART (STATIC)
  }

  /* -------------------- LINE CHART (UNCHANGED) -------------------- */

  renderLineChart() {
    const ctx = this.journeyChart.nativeElement.getContext('2d')!;

    const labels = ['Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17'];
    const started = [620, 600, 600, 680, 620, 640, 650];
    const completed = [320, 340, 360, 452, 430, 410, 425];
    const broken = [180, 160, 190, 152, 170, 165, 172];

    const gradientPurple = this.createGradient(ctx, '#6017EB', '#FFFFFF');
    const gradientGreen = this.createGradient(ctx, '#29CC5A', '#FFFFFF');
    const gradientRed = this.createGradient(ctx, '#EF4444', '#FFFFFF');

    this.lineChart = new Chart(ctx, {
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
          },
          {
            label: 'Completed',
            data: completed,
            backgroundColor: gradientGreen,
            borderColor: '#14CC4C',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: 'Broken',
            data: broken,
            backgroundColor: gradientRed,
            borderColor: '#EE595A',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true }
        }
      }
    });
  }

  /* -------------------- BAR CHART (DYNAMIC) -------------------- */

  getOnboardingCount() {
    this.adminCenterService.getOnboardingCounts().subscribe((res: any) => {
      const data = res?.data;
      console.log('data', data);


      const labels = ['Started', 'Completed', 'Broken Journey'];
      const values = [
        data?.startedCount ?? 0,
        data?.completedCount ?? 0,
        data?.brokenCount ?? 0
      ];

      this.renderBarChart(labels, values);
    });
  }

  renderBarChart(labels: string[], values: number[]) {
    const baseValue = values[0] || 1; // Started = 100%
    const percentages = values.map(v => Math.round((v / baseValue) * 100));
    const ctx = this.funnelChart.nativeElement.getContext('2d')!;

    if (this.barChart) {
      this.barChart.destroy();
    }

    const yAxisMax = this.getNiceMaxValue(values); // 🔥 NEW

    const gradients = [
      this.createStripedGradient('#6017EB', '#AD8DEB'),
      this.createStripedGradient('#14CC4C', '#8DEBA9'),
      this.createStripedGradient('#EE595A', '#EB8C8E'),
    ];

    this.barChart = new Chart(ctx, {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: gradients,
            borderRadius: {
              topLeft: 10,
              topRight: 10,
              bottomLeft: 0,
              bottomRight: 0
            },
            borderSkipped: false,
          }
        ]

      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => {
                const value = context.parsed?.y;
                return value !== null && value !== undefined
                  ? ` ${value.toLocaleString()}`
                  : '';
              }
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (val: number, ctx) => {
              const percent = percentages[ctx.dataIndex];
              return `${val}\n${percent}%`;
            },
            color: '#1C174A',
            font: {
              size: 16,
              weight: 'bold'
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
            beginAtZero: true,
            max: yAxisMax, // 🔥 HERE
            grid: { color: '#E6E6E6' },
            ticks: {
              color: '#A2A3A5',
              font: { size: 12 }
            }
          }
        }
      }
    });
  }


  /* -------------------- HELPERS -------------------- */

  createGradient(ctx: CanvasRenderingContext2D, top: string, bottom: string) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, top + '66');
    gradient.addColorStop(1, bottom + '00');
    return gradient;
  }

  createStripedGradient(color1: string, color2: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 40;

    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(1, color2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 2;

    for (let i = -40; i < canvas.width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 40);
      ctx.lineTo(i + 40, 0);
      ctx.stroke();
    }

    return ctx.createPattern(canvas, 'repeat')!;
  }

  getNiceMaxValue(values: number[]): number {
    const max = Math.max(...values);

    if (max <= 10) return 10;

    const magnitude = Math.pow(10, Math.floor(Math.log10(max)));
    return Math.ceil(max / magnitude) * magnitude;
  }

}
