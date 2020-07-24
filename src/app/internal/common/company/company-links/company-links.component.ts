import { Component, OnInit, Input } from "@angular/core";
import { ICompany } from "src/app/core/company/model/company.model";

@Component({
    selector: "app-company-links",
    templateUrl: "./company-links.component.html",
    styleUrls: ["./company-links.component.css"]
})
export class CompanyLinksComponent implements OnInit {
    @Input() company: ICompany;
    constructor() {}

    ngOnInit(): void {}
}
