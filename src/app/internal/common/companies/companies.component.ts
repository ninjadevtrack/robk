import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Chart } from "chart.js";
import { MatSort, Sort } from "@angular/material/sort";
import { fromMatSort, sortRows } from "./../../../core/datasource-utils";
import { CompanyService } from "../../../core/company/company.service";
import {
    ICompaniesResult,
    ICompany
} from "../../../core/company/model/company.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { of } from "rxjs";
import { EScaling } from "../../../core/scaling/scaling.enum";
import { ScalingService } from "../../../core/scaling/scaling.service";
import { ChartService } from "../../../core/common/chart.service";

@Component({
    selector: "app-companies",
    templateUrl: "./companies.component.html",
    styleUrls: ["./companies.component.scss"]
})
export class CompaniesComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    companies: ICompany[] = [];
    tags: string[] = [];
    cities: string[] = [];
    scalings: EScaling[] = [
        EScaling.SEED,
        EScaling.GROWTH,
        EScaling.SCALING,
        EScaling.ALL_DEALS
    ];
    companiesToDisplay$: Observable<ICompany[]>;
    form: FormGroup;
    sortEvents$: Observable<Sort>;
    filteredCompanyValuesCount: number;
    dataIsLoading = false;
    lastUpdated: Date;

    constructor(
        private _companyService: CompanyService,
        private _scalingSerivce: ScalingService,
        private _formBuilder: FormBuilder,
        private _elementRef: ElementRef,
        private _chartService: ChartService
    ) {}

    ngOnInit() {
        this.form = this._formBuilder.group({
            tags: [[], []],
            cities: [[], []],
            search: ["", []],
            scaling: [EScaling.SCALING, [Validators.required]],
            ignored: [false, [Validators.required]]
        });

        this.sortEvents$ = fromMatSort(this.sort);
        this.dataIsLoading = true;

        this._companyService
            .getCompanies()
            .subscribe((companiesResult: ICompaniesResult) => {
                this.companies = companiesResult.data;
                this.lastUpdated = new Date(companiesResult.lastUpdated);
                this.updateCompanyValuesToDisplay();
                this.dataIsLoading = false;

                // Let's collect all unique tags and cities
                let tags, city;
                this.companies.forEach(cmp => {
                    tags = cmp.tags.split(",").map(t => t.trim());
                    tags.forEach(tag => {
                        if (tag && !this.tags.includes(tag)) {
                            this.tags.push(tag);
                        }
                    });

                    city = cmp.location.split(",")[0].trim();
                    if (city && !this.cities.includes(city)) {
                        this.cities.push(city);
                    }
                });
                this.tags.sort((a, b) =>
                    a.toLowerCase().localeCompare(b.toLowerCase())
                );
                this.cities.sort();
            });
    }

    public updateCompanyValuesToDisplay() {
        const tags = this.form.controls["tags"].value;
        const cities = this.form.controls["cities"].value;
        const search = this.form.controls["search"].value;
        const scaling = this.form.controls["scaling"].value;
        const ignored = this.form.controls["ignored"].value;

        this.companiesToDisplay$ = of(this.companies).pipe(
            map((co: ICompany[]) => {
                let filteredCompanies = co.map(c => c);
                let cvTags;

                // First of all filter it out according to scaling
                if (scaling) {
                    filteredCompanies = filteredCompanies.filter(cv => {
                        let result;

                        switch (scaling) {
                            case EScaling.SCALING:
                                result = cv.maxEmp >= 30 && cv.maxEmp < 100;
                                break;
                            case EScaling.GROWTH:
                                result = cv.maxEmp >= 100;
                                break;
                            case EScaling.SEED:
                                result = cv.maxEmp < 30;
                                break;
                            case EScaling.ALL_DEALS:
                                result = true;
                                break;
                            default:
                                result = true;
                                break;
                        }

                        return result;
                    });
                }

                // Then let's filter according 'Ignore flag'
                filteredCompanies = filteredCompanies.filter(cv => {
                    return ignored ? cv.ignore : !cv.ignore;
                });

                // filter companies by tags, cities and search if they are defined
                if (tags.length > 0 || cities.length > 0 || search) {
                    filteredCompanies = filteredCompanies.filter(cv => {
                        cvTags = cv.tags.split(",").map(t => t.trim());

                        for (let i = 0; i < tags.length; i++) {
                            for (let j = 0; j < cvTags.length; j++) {
                                if (tags[i] === cvTags[j]) {
                                    return true;
                                }
                            }
                        }

                        if (
                            cities.includes(cv.location.split(",")[0].trim()) ||
                            (search &&
                                cv.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase()))
                        ) {
                            return true;
                        }

                        return false;
                    });
                }

                this.filteredCompanyValuesCount = filteredCompanies.length;

                return filteredCompanies;
            }),
            sortRows(this.sortEvents$)
        );
    }

    getScalingName(scaling: EScaling) {
        return this._scalingSerivce.getScalingName(scaling);
    }

    ignoreCompany(company: ICompany) {
        this._companyService.ignoreCompany(company.cpId).subscribe(res => {
            const index = this.companies.findIndex(
                v => v.cpId === company.cpId
            );
            if (index !== -1) {
                this.companies[index].ignore = true;
                this.updateCompanyValuesToDisplay();
            }
        });
    }
}
