import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Chart } from "chart.js";
import { CompanyService } from "src/app/core/company/company.service";
import { ICompany } from "src/app/core/company/model/company.model";
import { ChartService } from "src/app/core/common/chart.service";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";
import { ICapsuleNote } from "src/app/core/company/model/capsule-note.model";
import { Observable } from "rxjs";
import { ICapsuleDetails } from "src/app/core/company/model/capsule-details.model";

@Component({
    selector: "app-company-view",
    templateUrl: "./company-view.component.html",
    styleUrls: ["./company-view.component.scss"]
})
export class CompanyViewComponent implements OnInit {
    slug: string;
    company: ICompany;
    capsuleNotes$: Observable<ICapsuleNote[]>;
    capsuleDetails$: Observable<ICapsuleDetails>;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _chartService: ChartService,
        private _smoothScrollService: SmoothScrollService,
        private _companyService: CompanyService
    ) {}

    ngOnInit(): void {
        this._smoothScrollService.scrollTo(0, 0);
        this._route.params.subscribe(params => {
            this.slug = params.slug;

            this._companyService
                .getCompany(this.slug)
                .subscribe((company: ICompany) => {
                    if (!company) {
                        this._router.navigate(["/404"]);
                    }
                    this.company = company;
                });
            this.capsuleNotes$ = this._companyService.getNotes(this.slug);
            this.capsuleDetails$ = this._companyService.getCapsuleDetails(
                this.slug
            );
        });
    }
}
