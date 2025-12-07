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
  selector: 'app-dashboard-transaction-performance',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard-transaction-performance.html',
  styleUrl: './dashboard-transaction-performance.scss',
})
export class DashboardTransactionPerformance {
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;

  ngAfterViewInit() {
    this.initializeLineChart();
  }

  initializeLineChart() {
    if (this.myLineChartElement && this.myLineChartElement.nativeElement) {
      const ctxLineChart = this.myLineChartElement.nativeElement.getContext('2d');
      Chart.register(...registerables);

      // Gradient fill for the mobile and web lines
      const mobileGradient = ctxLineChart.createLinearGradient(0, 0, 0, 400);
      mobileGradient.addColorStop(0, '#EF4444');
      mobileGradient.addColorStop(1, '#FFFFFF');

      const webGradient = ctxLineChart.createLinearGradient(0, 0, 0, 400);
      webGradient.addColorStop(0, '#29CC5A');
      webGradient.addColorStop(1, '#FFFFFF');

      // Create the line chart
      const lineChart: any = new Chart(ctxLineChart, {
        type: 'line',
        data: {
          labels: ['Nov 21', 'Nov 22', 'Nov 23', 'Nov 24', 'Nov 25', 'Nov 26', 'Nov 27'],
          datasets: [
            {
              data: [100, 300, 200, 50, 100, 150, 200],  // 7 values for Mobile
              borderColor: '#EF444499',
              backgroundColor: mobileGradient,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2,
            },
            {
              data: [650, 500, 670, 550, 350, 600, 500],  // 7 values for Web
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
              max: 1000,           // New max value
              ticks: {
                stepSize: 250,     // 0, 250, 500, 750, 1000
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