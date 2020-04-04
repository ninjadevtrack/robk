import { Component, OnInit, Input } from "@angular/core";
import { ICompany } from "../../../core/company/model/company.model";

@Component({
    selector: "app-company-details",
    templateUrl: "./company-details.component.html",
    styleUrls: ["./company-details.component.scss"],
})
export class CompanyDetailsComponent implements OnInit {
    @Input() company: ICompany;
    displayedColumns: string[] = [
        "crmLink",
        "eng",
        "sales",
        "percentEng",
        "percentSales",
        "cbLastFundingDate",
        "cbLastSeries",
        "cbLastPremoneyUsd",
        "growth6Eng",
        "growth6Sales",
    ];
    dataSource: ICompany[];

    constructor() {}

    ngOnInit() {
        this.dataSource = [this.company];
    }
}
