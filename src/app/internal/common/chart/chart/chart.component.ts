import {Component, ElementRef, OnInit, ViewChild, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {ICompanyValue} from "../../../../core/graph-watch-list/model/company.model";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @ViewChild('canvas') canvas: ElementRef;
  @Input() companyValue: ICompanyValue;
  chart: any = [];

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.chart = new Chart(`canvas_${this.companyValue.name}`, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            lineTension: 0.1
          }]
        },
        options: {}
      });
    }, 2000);

  }

  /*
  * ///
  *
  *
  *  addChart(chart) {
    this.charts.push(chart);
  }

  getChart(customId) {
    return this.charts.find((c) => c.customId === customId);
  }

          setTimeout(() => {

            this.charts = [];

            filteredCompanyValues.forEach(cmp => {
              const htmlRef = this._elementRef.nativeElement.querySelector(`#canvas_${cmp.name}`);
              const chart = new Chart(htmlRef, {
                type: "line",
                data: {
                  labels: ["January", "February", "March", "April", "May", "June", "July"],
                  datasets: [{
                    label: "My First Dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    lineTension: 0.1
                  }]
                },
                options: {}
              });
              chart.customId = cmp.name; // Decorating the chart with customId
              this.addChart(chart);
            });

          }, 6000);*/

}
