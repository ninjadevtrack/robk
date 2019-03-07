import {Component, ElementRef, OnInit, ViewChild, Input, AfterViewInit} from '@angular/core';
import {Chart} from 'chart.js';
import {ICompany} from "../../../../core/graph-watch-list/model/company.model";
import * as moment from 'moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;
  @Input() company: ICompany;
  chart: any = [];
  data: any;

  constructor() {}

  ngOnInit() {

    this.data = {
      type: "line",
      data: {
        labels: this.company.data.map((d) => moment(d[0]).format('MM/YY')),
        datasets: [{
          label: this.company.name,
          data: this.company.data.map((d) => d[1]),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          lineTension: 0.5
        }]
      },
      options: {
        animation: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
            }
          }]
        },
        chartArea: {
          backgroundColor: this.getColor()
        }
      }
    };
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), this.data);
    }, 0);
  }

  getColor() {
    let color;
    switch (this.company.color) {
      case 'row-green':
        color = '#98FB98';
        break;
      case 'row-yellow':
        color = '#FFFACD';
        break;
      case 'row-red':
        color = '#FFE4E1';
        break;
      default:
        color = '#ffffff';
        break;
    }

    return color;
  }

}
