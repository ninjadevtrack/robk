import { Component, OnInit } from "@angular/core";
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";
import { ISearchEmployeesEntity } from "src/app/core/reports/models/search-employees.model";
import { NotSpacesStringValidator } from "src/app/core/validators/not-spaces-string-validator";
import * as moment from "moment";
import { EmployeeSearchField } from "src/app/core/reports/models/search-employees-params.model";
@Component({
    selector: "app-search-employees-report",
    templateUrl: "./search-employees-report.component.html",
    styleUrls: ["./search-employees-report.component.scss"]
})
export class SearchEmployeesReportComponent implements OnInit {
    entities: ISearchEmployeesEntity[];
    form: FormGroup;
    isDataLoading: boolean;
    isExporting: boolean;
    searchFields: EmployeeSearchField[] = [
        EmployeeSearchField.HISTORY_DESCRIPTION,
        EmployeeSearchField.OCCUPATION,
        EmployeeSearchField.BOTH,
        EmployeeSearchField.HISTORY_DESCRIPTION_EU,
        EmployeeSearchField.OCCUPATION_EU,
        EmployeeSearchField.BOTH_EU
    ];

    constructor(
        private _formBuilder: FormBuilder,
        private _peopleWatchService: PeopleWatchService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngOnInit(): void {
        this.isDataLoading = false;
        this.isExporting = false;
        this.form = this._formBuilder.group({
            searchField: [
                EmployeeSearchField.HISTORY_DESCRIPTION,
                [Validators.required]
            ],
            search: ["", [Validators.required, NotSpacesStringValidator()]]
        });
        this._smoothScrollService.scrollTo(0, 0);
    }

    searchOnKeyUp(event) {
        if (event.code !== "Enter") {
            return;
        }
        this.search();
    }

    search() {
        if (!this.form.valid) {
            return;
        }

        this.isDataLoading = true;
        this.entities = null;
        const regex = this.form.controls["search"].value;
        const searchField = this.form.controls["searchField"].value;
        const model = { regex, searchField, pageSize: 100, pageNumber: 1 };
        this._peopleWatchService
            .searchEmployees(model)
            .subscribe((entities: ISearchEmployeesEntity[]) => {
                this.entities = entities;
                this.isDataLoading = false;
            });
    }

    export() {
        if (!this.form.valid) {
            return;
        }
        this.isExporting = true;

        const suffix = moment().format("MM-DD-YYYY-hh_mm_ss");
        const fileName = `Employees_Search_${suffix}.xlsx`;
        const regex = this.form.controls["search"].value;
        const searchField = this.form.controls["searchField"].value;
        const model = { regex, searchField };
        this._peopleWatchService
            .searchEmployeesExportToXLSX(model)
            .subscribe(x => {
                // It is necessary to create a new blob object with mime-type explicitly set
                // otherwise only Chrome works like it should
                var newBlob = new Blob([x], {
                    type: "application/vnd.ms-excel"
                });

                // IE doesn't allow using a blob object directly as link href
                // instead it is necessary to use msSaveOrOpenBlob
                // @ts-ignore
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    // @ts-ignore
                    window.navigator.msSaveOrOpenBlob(newBlob, fileName);
                    return;
                }

                // For other browsers:
                // Create a link pointing to the ObjectURL containing the blob.
                const data = window.URL.createObjectURL(newBlob);

                var link = document.createElement("a");
                link.href = data;
                link.download = fileName;
                // this is necessary as link.click() does not work on the latest firefox
                link.dispatchEvent(
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    })
                );

                setTimeout(function () {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    window.URL.revokeObjectURL(data);
                    link.remove();
                }, 100);

                this.isExporting = false;
            });
    }

    getEmployeeSearchFieldName(searchField: EmployeeSearchField) {
        return this._peopleWatchService.getEmployeeSearchFieldName(searchField);
    }
}
