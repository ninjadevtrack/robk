import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
    selector: "robscore-internal-entry",
    providers: [],
    template: `
        <robscore-internal-header></robscore-internal-header>
        <router-outlet></router-outlet>
    `
})
export class InternalEntryComponent implements OnInit {
    constructor() {
        Chart.defaults.global.legend.display = false;
    }

    public ngOnInit() {}
}
