import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CategoryScale, LinearScale, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, DoughnutController, ArcElement, Chart, registerables } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
  selector: 'app-dashboard-digitatl-onboarding',
  imports: [
    CommonModule,
    CommonModule,
    MatCardModule,
    BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-digitatl-onboarding.html',
  styleUrl: './dashboard-digitatl-onboarding.scss',
})
export class DashboardDigitatlOnboarding {

  public barChartData: any;
  public barChartOptions: any;


  public barChartOptionsSet: any = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',    // VERTICAL BARS like the screenshot
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
    },
    elements: {
      line: {
        tension: 0.4                  // Slight curve for the line
      }
    }
  };

 public barChartDataSet: any = {
  labels: ['Kahramaa', "Int'l Transfer", 'Debit Payment', 'Credit Card', 'Bill Payment'],  // X-axis labels
  datasets: [
    {
      label: 'Mobile',
      data: [5900, 1500, 4500, 5600, 3900],       // purple bottom
      backgroundColor: () =>
        this.createStripedGradient('rgba(240, 219, 144, 1)', 'rgba(240, 203, 67, 1)'),
      borderRadius: 4,
      order: 2  // Bars first
    },
    {
      label: 'Web',
      data: [1500, 3000, 1800, 3100, 3500],       // green top
      backgroundColor: () =>
        this.createStripedGradient('rgba(235, 141, 143, 1)', 'rgba(239, 68, 68, 1)'),
      borderRadius: 4,
      order: 2  // Bars first
    },
    {
      label: 'Mobile',
      data: [2200, 1500, 2500, 2600, 3300],       // green bottom
      backgroundColor: () =>
        this.createStripedGradient('rgba(20, 204, 76, 1)', 'rgba(141, 235, 169, 1)'),
      borderRadius: 4,
      order: 2 // Bars first
    },
    // Line chart dataset (above the bars)
    {
      label: 'Avg Latency ms',
      data: [9000, 11500, 8500, 11600, 9500],  // Latency data for the line
      type: 'line', // Line chart type
      fill: false,   // Line shouldn't fill under the graph
      borderColor: 'rgba(96, 23, 235, 1)', // Line color
      borderWidth: 2, // Line thickness
      pointBackgroundColor: 'rgba(96, 23, 235, 1)', // Point color (circle markers)
      pointRadius: 4,  // Point size (smaller)
      tension: 0.4,    // Slight curve for the line
      order: 1  // Line above the bars
    }
  ]
};



  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.initChart();
    this.cdr.detectChanges();
  }

  initChart() {
    this.barChartData = {
      labels: ["Int'l Transfer", 'Kahramaa', 'Credit Card', 'Debit Payment', 'Bill Payment'],
      datasets: [
        {
          label: "Int'l Transfer",
          data: [22, 0, 0, 0, 0], // Ooredoo data
          backgroundColor: this.createStripedGradient('#14CC4C', '#8DEBA9'),
          borderRadius: 10
        },
        {
          label: 'Kahramaa',
          data: [0, 15, 0, 0, 0], // Debit Payment data
          backgroundColor: this.createStripedGradient('#F0CB43', '#F0D77A'),
          borderRadius: 10
        },
        {
          label: 'Credit Card',
          data: [0, 0, 12, 0, 0], // To Another DB data
          backgroundColor: this.createStripedGradient('#EE595A', '#EB8C8E'),
          borderRadius: 10
        },
        {
          label: 'Debit Payment',
          data: [0, 0, 0, 17, 0], // Credit Card data
          backgroundColor: this.createStripedGradient('#6017EB', '#AD8DEB'),
          borderRadius: 10
        },
        {
          label: 'Bill Payment',
          data: [0, 0, 0, 0, 7], // To Own A/C data
          backgroundColor: this.createStripedGradient('#F043D3', '#EB8DDB'),
          borderRadius: 10
        }
      ]
    };

    this.barChartOptions = {
      indexAxis: 'y', // Horizontal bar chart
      responsive: true,
      plugins: {
        legend: { display: false }, // Hide the legend
        datalabels: {
          anchor: 'center',  // Position the label in the center of the bar
          align: 'center',   // Align the label in the center of the bar
          color: '#fff',     // White color for the label text
          font: {
            size: 14,         // Font size of the label text
            weight: 'bold'    // Make the text bold
          },
          formatter: (value: number) => {
            console.log('formatter called, value:', value);  // Debug line to ensure it's called
            return `${value}%`; // Display the percentage inside the bar
          },
          // Ensuring the labels are above the bars
          z: 10
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false, // Hide grid lines on X-axis
            drawBorder: false
          },
          ticks: {
            display: false, // Hide the ticks on the X-axis
          }
        },
        y: {
          stacked: true,
          grid: {
            display: false, // Hide grid lines on Y-axis
            drawBorder: false
          },
          ticks: {
            color: '#A2A3A5', // Y-axis label color
            font: {
              size: 14, // Font size
              weight: '400'
            },
            padding: 8 // Padding for Y-axis labels
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
}
