import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";

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
        // Register all components needed for your charts
        Chart.register(...registerables);

        // Adjust global default options as needed in Chart.js v4
        // For example, to hide the legend globally:
        Chart.defaults.plugins.legend.display = false;
    }

    public ngOnInit() {}
}
