import { Component, OnInit } from "@angular/core";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";

@Component({
    selector: "app-report-list",
    templateUrl: "./report-list.component.html",
    styleUrls: ["./report-list.component.css"]
})
export class ReportListComponent implements OnInit {
    constructor(private _smoothScrollService: SmoothScrollService) {}

    ngOnInit(): void {
        this._smoothScrollService.scrollTo(0, 0);
    }
}
