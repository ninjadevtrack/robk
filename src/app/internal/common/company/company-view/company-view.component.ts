import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Chart } from "chart.js";
import { CompanyService } from "src/app/core/company/company.service";
import { ICompany } from "src/app/core/company/model/company.model";
import { ChartService } from "src/app/core/common/chart.service";

@Component({
    selector: "app-company-view",
    templateUrl: "./company-view.component.html",
    styleUrls: ["./company-view.component.scss"]
})
export class CompanyViewComponent implements OnInit {
    slug: string;
    company: ICompany;

    constructor(
        private _route: ActivatedRoute,
        private _chartService: ChartService,
        private _companyService: CompanyService
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.slug = params.slug;

            this._companyService
                .getCompany(this.slug)
                .subscribe((company: ICompany) => {
                    this.company = company;
                    console.log(this.company);
                });
        });
    }
}
