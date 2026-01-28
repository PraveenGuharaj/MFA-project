import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CategoryScale, LinearScale, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, DoughnutController, ArcElement, Chart, registerables } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AdminCenterService } from '../../admin-center/admin-center-service';

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

  // Top-5 Failure chart ONLY
  public top5ChartData: any;
  public top5ChartOptions: any;

  // Dynamic percentage labels
  public top5Left: any[] = [];
  public top5Right: any[] = [];


  public barChartOptionsSet: any = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',   // vertical bars
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          callback: (value: any, index: number) => {
            const label = this.barChartDataSet.labels[index];

            if (label && label.length > 12) {
              return label.split(' ');
            }
            return label;
          },
          font: { size: 14 },
          color: '#444'
        }
      },
      y: {
        stacked: true,
        min: 0,
        max: 30,
        ticks: {
          stepSize: 2, // optional but clean: 0,2,4...18
          font: { size: 14 },
          color: "#777"
        },
        grid: {
          color: "#e5e5e5",
          drawBorder: false
        }
      }
    },

    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };


  public barChartDataSet: any = {
    labels: [],
    datasets: []
  };


  constructor(private cdr: ChangeDetectorRef, private adminCenterService: AdminCenterService) { }

  ngAfterViewInit() {
    // this.initChart();
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.getFailureTranaction();
  }

  initChart() {
    this.barChartData = {
      labels: ["Int'l Transfer", 'Kahramaa', 'Credit Card', 'Debit Payment', 'Bill Payment'],
      datasets: [
        {
          label: "Int'l Transfer",
          data: [22, 0, 0, 0, 0], // Ooredoo data
          backgroundColor: this.createStripedGradient('#14CC4C', '#8DEBA9'),
          borderRadius: 10,
          order: 2
        },
        {
          label: 'Kahramaa',
          data: [0, 15, 0, 0, 0], // Debit Payment data
          backgroundColor: this.createStripedGradient('#F0CB43', '#F0D77A'),
          borderRadius: 10,
          order: 2
        },
        {
          label: 'Credit Card',
          data: [0, 0, 12, 0, 0], // To Another DB data
          backgroundColor: this.createStripedGradient('#EE595A', '#EB8C8E'),
          borderRadius: 10,
          order: 2
        },
        {
          label: 'Debit Payment',
          data: [0, 0, 0, 17, 0], // Credit Card data
          backgroundColor: this.createStripedGradient('#6017EB', '#AD8DEB'),
          borderRadius: 10,
          order: 2
        },
        {
          label: 'Bill Payment',
          data: [0, 0, 0, 0, 7], // To Own A/C data
          backgroundColor: this.createStripedGradient('#F043D3', '#EB8DDB'),
          borderRadius: 10,
          order: 2
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

  getFailureTranaction() {
    const payload = {
      endDate: '2026-01-28',
      startDate: '2024-12-18',
      unit: 'PRD'
    };

    this.adminCenterService
      .getTopFailureTransaction(payload)
      .subscribe((res: any) => {
        console.log('failurlatency', res);

        // 👇 THIS is what actually updates the chart
        this.patchServiceFailureLatencyChart(res.data);
        this.patchTop5FailureChart(res.data);
      });
  }

  patchServiceFailureLatencyChart(res: any) {
    const list = res?.serviceFailureAndLatency?.failedTransactionRate || [];

    // Remove duplicate categories
    const map = new Map<string, any>();
    list.forEach((item: any) => {
      if (!map.has(item.categoryDesc)) {
        map.set(item.categoryDesc, item);
      }
    });

    const data = Array.from(map.values());

    this.barChartDataSet = {
      labels: data.map(d => d.categoryDesc),
      datasets: [

        // 🟡 1️⃣ WARNING → bottom
        {
          label: 'Warning',
          data: data.map(d => +d.warning),
          backgroundColor: () =>
            this.createStripedGradient(
              'rgba(240, 219, 144, 1)',
              'rgba(240, 203, 67, 1)'
            ),
          borderRadius: 4,
          stack: 'failure',
          order: 2
        },

        // 🔴 2️⃣ ERROR → middle
        {
          label: 'Error',
          data: data.map(d => +d.error),
          backgroundColor: () =>
            this.createStripedGradient(
              'rgba(235, 141, 143, 1)',
              'rgba(239, 68, 68, 1)'
            ),
          borderRadius: 4,
          stack: 'failure',
          order: 2
        },

        // 🟢 3️⃣ INFO → top
        {
          label: 'Info',
          data: data.map(d => +d.info),
          backgroundColor: () =>
            this.createStripedGradient(
              'rgba(20, 204, 76, 1)',
              'rgba(141, 235, 169, 1)'
            ),
          borderRadius: 4,
          stack: 'failure',
          order: 2
        },

        // 🔵 Line stays last
        {
          label: 'Avg Latency ms',
          type: 'line',
          data: data.map(d => +d.total),
          borderColor: 'rgba(96, 23, 235, 1)',
          pointBackgroundColor: 'rgba(96, 23, 235, 1)',
          pointRadius: 4,
          tension: 0.4,
          fill: false,
          order: 0
        }
      ]
    };


    this.cdr.detectChanges();
  }

  patchTop5FailureChart(res: any) {
    const list =
      res?.serviceFailureAndLatency?.failedTransactionRate || [];

    // Remove duplicates
    const map = new Map<string, any>();
    list.forEach((item: any) => {
      if (!map.has(item.categoryDesc)) {
        map.set(item.categoryDesc, item);
      }
    });

    // Sort by failurePercentage DESC
    const sorted = Array.from(map.values()).sort(
      (a, b) =>
        parseFloat(b.failurePercentage) -
        parseFloat(a.failurePercentage)
    );

    // Take Top 5
    const top5 = sorted.slice(0, 5);

    // Split labels (2 left, 3 right)
    this.top5Left = top5.slice(0, 2);
    this.top5Right = top5.slice(2);

    // Chart data (BAR = failurePercentage)

    const colors = [
      ['#14CC4C', '#8DEBA9'], // green
      ['#F0CB43', '#F0D77A'], // yellow
      ['#EE595A', '#EB8C8E'], // red
      ['#6017EB', '#AD8DEB'], // purple
      ['#F043D3', '#EB8DDB']  // pink
    ];

    this.top5ChartData = {
      labels: top5.map(d => d.categoryDesc),
      datasets: [
        {
          data: top5.map(d => parseFloat(d.failurePercentage)),
          backgroundColor: top5.map((_, i) =>
            this.createStripedGradient(
              colors[i][0],
              colors[i][1]
            )
          ),
          borderRadius: 8
        }
      ]
    };


    this.top5ChartOptions = {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end', // position at end of bar
          align: 'right', // right side of bar
          color: '#000',  // text color
          font: { weight: '600', size: 12 },
          formatter: (value: any) => `${value}% failures` // show value on bar
        },
        tooltip: {
          callbacks: {
            label: (ctx: any) => `${ctx.raw}% failures`
          }
        }
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          ticks: { callback: (v: any) => `${v}%` },
          grid: { display: false }
        },
        y: { grid: { display: false } }
      }
    };


    this.cdr.detectChanges();
  }


}
