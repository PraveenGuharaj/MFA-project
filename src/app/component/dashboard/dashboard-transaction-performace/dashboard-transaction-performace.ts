import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CategoryScale, LinearScale, LineController, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, DoughnutController, ArcElement, Chart } from 'chart.js';
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
  selector: 'app-dashboard-transaction-performace',
  imports: [
    CommonModule,
    CommonModule,
    MatCardModule,
    // BaseChartDirective,
    MatIconModule
  ],
  templateUrl: './dashboard-transaction-performace.html',
  styleUrl: './dashboard-transaction-performace.scss',
})
export class DashboardTransactionPerformace {
  @ViewChild('myDonutChart', { static: false }) myDonutChartElement!: ElementRef;
  ngAfterViewInit() {
    this.initPieChart();
  }

  initPieChart() {
    const canvas: HTMLCanvasElement = this.myDonutChartElement.nativeElement;
    if (!canvas) return;

    if ((this as any).donutChart) {
      try { (this as any).donutChart.destroy(); } catch (e) { }
      (this as any).donutChart = null;
    }

    // canvas size
    canvas.width = 550;
    canvas.height = 550;
    canvas.setAttribute('style', 'width: 350px !important; height: 350px !important;');

    const ctx: any = canvas.getContext('2d');

    // ===== CREATE 10 GRADIENTS =====
    function makeGradient(color1: string, color2: string) {
      const g = ctx.createLinearGradient(0, 0, 0, 300);
      g.addColorStop(0, color1);
      g.addColorStop(1, color2);
      return g;
    }

    const g1 = makeGradient('#6366F1', '#8DAAEB');
    const g2 = makeGradient('#F97316', '#EBA78D');
    const g3 = makeGradient('#14CC4C', '#14CC4C');
    const g4 = makeGradient('#C08DEB', '#8B5CF6');
    const g5 = makeGradient('#EF3838', '#EB8D8D');
    const g6 = makeGradient('#14B0B8', '#8DE3EB');
    const g7 = makeGradient('#F2C2CE', '#EC4899');
    const g8 = makeGradient('#F0DB90', '#F0CB43');
    const g9 = makeGradient('#C1C1C1', '#8A8A8A');
    const g10 = makeGradient('#DBEB8D', '#93EB17');

    const gradients = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

    // ===== DIAGONAL PATTERN =====
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
          ctx.arc(segment.x, segment.y, segment.outerRadius,
            segment.startAngle, segment.endAngle);
          ctx.arc(segment.x, segment.y, segment.innerRadius,
            segment.endAngle, segment.startAngle, true);

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

    // ===== CENTER TEXT =====
    const centerTextPlugin = {
      id: 'centerText',
      afterDraw(chart: any) {
        const { ctx } = chart;
        const width = chart.width;
        const height = chart.height;

        // const total = 12342; // dynamic value

        ctx.save();
        ctx.font = 'bold 26px Poppins';
        ctx.fillStyle = '#16003A';
        ctx.textAlign = 'center';
        // ctx.fillText(total.toString(), width / 2, height / 2 - 6);

        ctx.font = '14px Poppins';
        ctx.fillStyle = '#7A7A7A';
        // ctx.fillText('Requests', width / 2, height / 2 + 18);

        ctx.restore();
      }
    };

    // ===== DONUT CHART =====
    (this as any).donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          "Ooredoo", "Debit Payment", "Credit Card", "Online Transfer",
          "Wallet", "Prepaid Topup", "Gas Bill", "Electricity",
          "Water Bill", "Other Services"
        ],
        datasets: [{
          data: [22, 15, 12, 8, 5, 6, 8, 10, 2, 3], // 10 slices
          backgroundColor: gradients,
          borderWidth: 5,
          borderColor: "#FFFFFF",
          hoverBorderColor: "#FFFFFF",
          spacing: 3
        }]
      },
      options: {
        cutout: '70%',
        rotation: 120,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#ff0000",
            bodyColor: "#000",
            padding: 12,
            displayColors: false,
            borderColor: "#eee",
            borderWidth: 1,
            boxPadding: 6,
            callbacks: {
              label: function (ctx: any) {
                return `${ctx.raw}%`;
              }
            }
          }
        }
      },
      plugins: [donutPatternPlugin, centerTextPlugin]
    });
  }

}
