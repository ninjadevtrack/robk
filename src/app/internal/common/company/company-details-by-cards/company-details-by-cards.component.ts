import { Component, OnInit, Input } from "@angular/core";
import { ICompany } from "src/app/core/company/model/company.model";

@Component({
    selector: "app-company-details-by-cards",
    templateUrl: "./company-details-by-cards.component.html",
    styleUrls: ["./company-details-by-cards.component.css"]
})
export class CompanyDetailsByCardsComponent implements OnInit {
    @Input() company: ICompany;

    constructor() {}

    ngOnInit(): void {}
}
