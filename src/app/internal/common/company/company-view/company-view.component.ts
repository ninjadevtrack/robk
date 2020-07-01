import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CompanyService } from "src/app/core/company/company.service";
import { ICompany } from "src/app/core/company/model/company.model";

@Component({
    selector: "app-company-view",
    templateUrl: "./company-view.component.html",
    styleUrls: ["./company-view.component.css"]
})
export class CompanyViewComponent implements OnInit {
    slug: string;
    company: ICompany;

    constructor(
        private _route: ActivatedRoute,
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
