import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { IReportAEntity } from "src/app/core/reports/models/report-a.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";

@Component({
    selector: "app-report-a",
    templateUrl: "./report-a.component.html",
    styleUrls: ["./report-a.component.css"]
})
export class ReportAComponent implements OnInit {
    entities: IReportAEntity[];
    searchPipe: SearchPipe = new SearchPipe();
    form: FormGroup;
    searchFields: string;

    constructor(
        private _formBuilder: FormBuilder,
        private _peopleWatchService: PeopleWatchService
    ) {}

    ngOnInit(): void {
        this.searchFields = ["id", "firstName", "lastName"].join(",");
        this.form = this._formBuilder.group({
            search: ["", []]
        });
        this._peopleWatchService
            .reportA()
            .subscribe((entities: IReportAEntity[]) => {
                this.entities = entities;
            });
    }

    getFilteredEntities(): IReportAEntity[] {
        return this.searchPipe.transform(
            this.entities,
            this.searchFields,
            this.form.controls["search"].value
        );
    }
}
