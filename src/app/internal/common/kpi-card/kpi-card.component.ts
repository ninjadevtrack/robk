import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-kpi-card",
    templateUrl: "./kpi-card.component.html",
    styleUrls: ["./kpi-card.component.scss"]
})
export class KpiCardComponent implements OnInit {
    @Input() name: any;
    @Input() value: any;
    @Input() percentageMode: boolean = false;
    @Input() isBig: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    getValueToShow(): string {
        if (!this.value) {
            return "-";
        }
        return this.percentageMode ? this.value + "%" : this.value;
    }

    getCardClass() {
        return this.isBig ? "kpi-card-big" : "kpi-card-small";
    }
}
