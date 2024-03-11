import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    Input,
    AfterViewInit
} from "@angular/core";
import { Chart } from "chart.js";
import { ICompany } from "../../../../core/company/model/company.model";
import moment from "moment";

@Component({
    selector: "app-chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit, AfterViewInit {
    @ViewChild("canvas", { static: false }) canvas: ElementRef;
    @Input() company: ICompany;
    chart: any = [];
    data: any;

    constructor() {}

    ngOnInit() {
        const labels = this.company.data.map(d => moment(d[0]).format("MM/YY"));
        const data = this.company.data.map(d => d[1]);
    
        this.data = {
            type: "line",
            data: {
                labels,
                datasets: [{
                    label: this.company.name,
                    data,
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.5 // 'lineTension' is renamed to 'tension' in Chart.js 3+
                }]
            },
            options: {
                animation: false,
                maintainAspectRatio: false,
                scales: {
                    y: { // 'yAxes' is updated to 'y' in Chart.js 3+
                        beginAtZero: true,
                        // Incorporate your 'ticksObject' logic here
                    }
                },
                plugins: {
                    chartAreaBackgroundColor: { // Custom plugin options should go under 'plugins'
                        color: this.getColor()
                    }
                }
                // 'chartArea' should be inside 'plugins' for custom plugin options if needed
            }
        };
    }
    
    ngAfterViewInit(): void {
        this.chart = new Chart(
            this.canvas.nativeElement.getContext('2d'),
            this.data
        );
    }    

    getColor() {
        let color;
        switch (this.company.color) {
            case "row-green":
                color = "#98FB98";
                break;
            case "row-yellow":
                color = "#FFFACD";
                break;
            case "row-red":
                color = "#FFE4E1";
                break;
            default:
                color = "#ffffff";
                break;
        }

        return color;
    }

    onIntersection(event) {
        if (event.visible && Array.isArray(this.chart)) {
            setTimeout(() => {
                this.chart = new Chart(
                    this.canvas.nativeElement.getContext("2d"),
                    this.data
                );
            }, 250);
        }
    }
}
