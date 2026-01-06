import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, Chart, registerables } from 'chart.js';
import * as L from 'leaflet';
import { Chart as ChartJS } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardGeographicsChart } from '../dashboard-geographics-chart/dashboard-geographics-chart';

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
  selector: 'app-dashboard-geographic-metrics',
  imports: [
    MatCardModule,
    MatIconModule,
    NgApexchartsModule,
    DashboardGeographicsChart
  ],
  templateUrl: './dashboard-geographic-metrics.html',
  styleUrl: './dashboard-geographic-metrics.scss',
})
export class DashboardGeographicMetrics {
  @ViewChild('myLineChart', { static: false }) myLineChartElement!: ElementRef;
  @ViewChild('myBarChart', { static: false }) myBarChartElement!: ElementRef;
  @ViewChild('mapContainer', { static: false })
  mapContainer!: ElementRef<HTMLDivElement>;
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
  private map!: L.Map;

  ngAfterViewInit(): void {
    // Ensure DOM is ready
    setTimeout(() => {
      this.initMap();
    });
  }

  private initMap(): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map(this.mapContainer.nativeElement, {
      zoomControl: false,
      attributionControl: false
    }).setView([25, 70], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);

    L.marker([30, 65])
      .addTo(this.map)
      .bindPopup(`
        <div class="map-popup">
          <div>Mobile <b>2000</b></div>
          <div>Web <b>9800</b></div>
        </div>
      `)
      .openPopup();
  }



  initBarChart
    () {
    // Bar Chart setup
    const ctx = this.myBarChartElement.nativeElement.getContext('2d');

    // Create gradient for Web (Purple)
    const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPurple.addColorStop(0, '#6017EB');
    gradientPurple.addColorStop(1, '#AD8DEB');

    // Create gradient for Mobile (Green)
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGreen.addColorStop(0, '#14CC4C');
    gradientGreen.addColorStop(1, '#8DEBA9');

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
      afterDatasetDraw(chart: any, args: any, options: any) {
        const { ctx } = chart;
        const datasetIndex = args.index;
        const bars = chart.getDatasetMeta(datasetIndex).data;

        bars.forEach((bar: any) => {
          ctx.save();
          ctx.fillStyle = datasetIndex === 0 ? patternGreen : patternPurple;
          ctx.globalAlpha = 1;
          ctx.fillRect(bar.x - bar.width / 2, bar.y, bar.width, bar.base - bar.y);
          ctx.restore();
        });
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
            display: false,
            position: 'top',
          },
        },
      },
      plugins: [patternPlugin], // Register the custom plugin here
    });


  }

  initializeLineChart() {
    if (this.myLineChartElement && this.myLineChartElement.nativeElement) {
      const ctxLineChart = this.myLineChartElement.nativeElement.getContext('2d');
      Chart.register(...registerables);

      // Gradient fill for the mobile and web lines
      const mobileGradient = ctxLineChart.createLinearGradient(0, 0, 0, 400);
      mobileGradient.addColorStop(0, '#6017EB');
      mobileGradient.addColorStop(1, '#FFFFFF00');

      const webGradient = ctxLineChart.createLinearGradient(0, 0, 0, 400);
      webGradient.addColorStop(0, '#29CC5A');
      webGradient.addColorStop(1, '#FFFFFF00');

      // Create the line chart
      const lineChart: any = new Chart(ctxLineChart, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: [3000, 5000, 7000, 6000, 10000, 6000, 8000],  // 7 values for Mobile
              borderColor: '#6017EB99',
              backgroundColor: mobileGradient,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2,
            },
            // {
            //   data: [3000, 6000, 5000, 6700, 9200, 7000, 5900],  // 7 values for Web
            //   borderColor: '#29CC5A99',
            //   backgroundColor: webGradient,
            //   fill: true,
            //   tension: 0.4,
            //   pointRadius: 0,
            //   borderWidth: 2,
            // }
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
              min: 3000,
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
