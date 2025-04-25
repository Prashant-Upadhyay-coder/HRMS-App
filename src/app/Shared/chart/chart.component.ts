import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-chart',
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})

  export class ChartComponent implements OnInit, OnDestroy {
    @Input({required: true}) charttype: any = 'bar';
    data: any;
    options: any;
    chartWidth: string = '100%';
    chartHeight: string = '300px';
    private resizeObserver: ResizeObserver | undefined;
  
    constructor() {
      this.initializeChart();
    }
  
    ngOnInit() {
      this.setupResizeObserver();
    }
  
    ngOnDestroy() {
      this.resizeObserver?.disconnect();
    }
  
    private initializeChart() {
      const documentStyle = getComputedStyle(document.documentElement);
      // const textColor = documentStyle.getPropertyValue('text-900');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Present',
            data: [40, 50, 65, 35, 40, 52, 88, 48, 23, 47, 25, 19], // Example Present days
            backgroundColor: documentStyle.getPropertyValue('--p-slate-400'), // Blue for WFH
            borderColor: documentStyle.getPropertyValue('--p-slate-400'),
            borderWidth: 1,
          },
          {
            label: 'WFH',
            data: [15, 20, 12, 17, 8, 13, 15, 8, 12, 10, 10, 9], // Example WFH days
         
            backgroundColor: documentStyle.getPropertyValue('--p-slate-200'), // Green for Present
            borderColor: documentStyle.getPropertyValue('--p-slate-200'),
            borderWidth: 1,
          },
          {
            label: 'Absent',
            data: [5, 10, 3, 8, 2, 5, 7, 4, 5, 3, 5, 2], // Example Absent days
            backgroundColor: documentStyle.getPropertyValue('--p-slate-300'), // Red for Absent
            borderColor: documentStyle.getPropertyValue('--p-slate-300'),
            borderWidth: 1,
            borderRadius: {
              topLeft: 6,  // Rounds top-left corner
              topRight: 6, // Rounds top-right corner
              bottomLeft: 0,
              bottomRight: 0
            }
          },
       
        ]
      };
    
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            // labels: {
            //   color: textColor
            // }
          },
   
        },
        scales: {
          x: {
            stacked: true, // Stack bars on x-axis
            grid: {
              display: true,
              color: surfaceBorder,
              drawBorder: false
            },
            // ticks: {
            //   color: textColor
            // }
          },
          y: {
            stacked: true, // Stack bars on y-axis
            grid: {
              display: true,
              color: surfaceBorder,
              drawBorder: false
            },
            // ticks: {
            //   color: textColor
            // },
            beginAtZero: true
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
        }
      };
    }
  
    private setupResizeObserver() {
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => {
          // Force chart update on resize
          this.data = {...this.data};
        });
        
        const chartContainer = document.querySelector('p-chart')?.parentElement;
        if (chartContainer) {
          this.resizeObserver.observe(chartContainer);
        }
      }
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      // Fallback for browsers without ResizeObserver
      if (!this.resizeObserver) {
        this.data = {...this.data};
      }
    }
  
}
