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
  selector: 'app-dashboard-service-request',
  imports: [
    CommonModule,
    CommonModule,
    MatCardModule,
    BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-service-request.html',
  styleUrl: './dashboard-service-request.scss',
})
export class DashboardServiceRequest {
  @ViewChild('myChart', { static: false }) myChartElement!: ElementRef;
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

public barChartDataSet: any = {
  labels: ['Web', 'Mobile'],  // X-axis labels
  datasets: [
    {
      label: 'Completed',
      data: [60, 50], // Web: 60%, Mobile: 50%
      backgroundColor: (ctx: any) => this.createStripedBarGradientSet(
        'rgba(20, 204, 76, 1)',  // Green color for completed
        'rgba(141, 235, 169, 1)' // Light green for completed
      ),
      borderRadius: 10,
      barThickness: 40,   // Reduced bar thickness for more padding
    },
    {
      label: 'Pending Approval',
      data: [20, 30], // Web: 10%, Mobile: 5%
      backgroundColor: (ctx: any) => this.createStripedBarGradientSet(
        'rgba(96, 23, 235, 1)',  // Purple color for pending approval
        'rgba(173, 141, 235, 1)' // Light purple for pending approval
      ),
      borderRadius: 10,
      barThickness: 40,   // Reduced bar thickness for more padding
    },
    {
      label: 'Pending',
      data: [10, 15], // Web: 20%, Mobile: 30%
      backgroundColor: (ctx: any) => this.createStripedBarGradientSet(
        'rgba(240, 203, 67, 1)',  // Yellow color for pending
        'rgba(240, 215, 122, 1)'  // Light yellow for pending
      ),
      borderRadius: 10,
      barThickness: 40,   // Reduced bar thickness for more padding
    },
    {
      label: 'Expired',
      data: [10, 5], // Web: 10%, Mobile: 15%
      backgroundColor: (ctx: any) => this.createStripedBarGradientSet(
        'rgba(238, 89, 90, 1)',  // Red color for expired
        'rgba(235, 140, 142, 1)' // Light red for expired
      ),
      borderRadius: 10,
      barThickness: 40,   // Reduced bar thickness for more padding
    },
  ]
};




  

public barChartOptionsSet: any = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y', // Horizontal bars
  scales: {
    x: {
      stacked: true,
      grid: { display: false }, // Hide x-axis grid lines
      ticks: { display: false }, // Hide x-axis labels
      // Shift the bars 40px to the right by using the 'beginAtZero' and adjusting the 'min' value.
      beginAtZero: true, // Ensure that the bars start from 0 on the x-axis.
      min: -20, // This creates the offset by starting the x-axis from -40px, shifting bars to the right.
    },
    y: {
      stacked: true,
      ticks: { display: false }, // Hide y-axis labels
      grid: { display: false } // Hide y-axis grid lines
    }
  },
  plugins: {
    legend: { display: false } // Hide legend
  }
};





  constructor() { }

  ngOnInit(): void { }

createStripedBarGradientSet(baseColor1: string, baseColor2: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 200;   // Width of the pattern
  canvas.height = 40;   // Height of the pattern

  const ctx = canvas.getContext('2d')!;

  // --- Create Gradient Background ---
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, baseColor1);
  // gradient.addColorStop(1, baseColor2);

  // Fill the gradient as background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // --- Draw White Diagonal Stripes ---
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.30)'; // White stripes with 30% opacity
  ctx.lineWidth = 2;

  // Create diagonal stripes on the canvas
  for (let i = -40; i < canvas.width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 40);  // Starting from bottom-left
    ctx.lineTo(i + 40, 0); // Ending at top-right
    ctx.stroke();
  }

  // --- Create Pattern ---
  return ctx.createPattern(canvas, 'repeat')!;
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


  ngAfterViewInit() {
    this.initChart();
    this.barInitChart();

  }

   barInitChart() {
    const canvas = this.myBarChartElement.nativeElement;
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: this.barChartDataSet,
      options: this.barChartOptionsSet
    });
  }


createStripedGradientSet(baseColor1: string, baseColor2: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 40;

  const ctx = canvas.getContext('2d')!;

  // --- Create Gradient Background ---
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, baseColor1);
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


  createGradient(ctx: any, colorType: string) {
    const canvas = document.createElement('canvas');
    const gradientCtx:any = canvas.getContext('2d')!;
    canvas.width = 200;
    canvas.height = 40;

    let gradient: any;
    // Gradient color logic
    switch (colorType) {
      case 'green':
        gradient = gradientCtx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(20, 204, 76, 1)');
        gradient.addColorStop(1, 'rgba(141, 235, 169, 1)');
        break;
      case 'yellow':
        gradient = gradientCtx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(240, 203, 67, 1)');
        gradient.addColorStop(1, 'rgba(240, 215, 122, 1)');
        break;
      case 'red':
        gradient = gradientCtx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(238, 89, 90, 1)');
        gradient.addColorStop(1, 'rgba(235, 140, 142, 1)');
        break;
      case 'purple':
        gradient = gradientCtx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(96, 23, 235, 1)');
        gradient.addColorStop(1, 'rgba(173, 141, 235, 1)');
        break;
      default:
        gradient = gradientCtx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
    }

    // Draw striped pattern
    const stripeCanvas = document.createElement('canvas');
    stripeCanvas.width = 12;
    stripeCanvas.height = 12;
    const stripeCtx = stripeCanvas.getContext('2d')!;
    stripeCtx.strokeStyle = 'rgba(255,255,255,0.25)';
    stripeCtx.lineWidth = 2;
    for (let i = -12; i < stripeCanvas.width; i += 4) {
      stripeCtx.beginPath();
      stripeCtx.moveTo(i, 0);
      stripeCtx.lineTo(i + 12, 12);
      stripeCtx.stroke();
    }
    const stripePattern = stripeCtx.createPattern(stripeCanvas, 'repeat');

    // Create pattern with gradient
    gradientCtx.fillStyle = gradient;
    gradientCtx.fillRect(0, 0, canvas.width, canvas.height);

    // Apply stripe pattern on top of gradient
    gradientCtx.fillStyle = stripePattern;
    gradientCtx.fillRect(0, 0, canvas.width, canvas.height);

    return gradient;
  }



 

  // add a property at component level:
  // private donutChart: any;



  initChart() {
    this.barChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Mobile',
          data: [8000, 1500, 4000, 5500, 2000, 4500, 2000],
          backgroundColor: this.createStripedGradient(
            'rgba(173, 141, 235, 1)',
            'rgba(96, 23, 235, 1)'
          ),
          borderRadius: 4
        },
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


}
