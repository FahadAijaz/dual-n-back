import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements OnInit{

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 1,
      },
    },
    legend: {
      labels: {
        fontColor: '#4A90E2'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#50E3C2',
        },
        gridLines: {
          display: false
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#50E3C2',
        },
        gridLines: {
          display: false
        },
      }]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#4A90E2',
      pointBackgroundColor: '#4A90E2',
      pointBorderColor: '#50E3C2',
      pointHoverBackgroundColor: '#50E3C2',
      pointHoverBorderColor: '#50E3C2'
    },
    { // grey
      backgroundColor: 'transparent',
      borderColor: '#2c598a',
      pointBackgroundColor: '#4A90E2',
      pointBorderColor: '#50E3C2',
      pointHoverBackgroundColor: '#50E3C2',
      pointHoverBorderColor: '#50E3C2'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
