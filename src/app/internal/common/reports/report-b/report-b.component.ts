import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { IReportBEntity } from "src/app/core/reports/models/report-b.model";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";

@Component({
    selector: "app-report-b",
    templateUrl: "./report-b.component.html",
    styleUrls: ["./report-b.component.css"]
})
export class ReportBComponent implements OnInit {
    entities: IReportBEntity[];
    searchPipe: SearchPipe = new SearchPipe();
    form: UntypedFormGroup;
    searchFields: string;

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _peopleWatchService: PeopleWatchService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngOnInit(): void {
        this.searchFields = ["id", "name", "publicIdentifier"].join(",");
        this.form = this._formBuilder.group({
            search: ["", []]
        });
        this._peopleWatchService
            .reportB()
            .subscribe((entities: IReportBEntity[]) => {
                this.entities = entities;
            });
        this._smoothScrollService.scrollTo(0, 0);
    }

    getFilteredEntities(): IReportBEntity[] {
        return this.searchPipe.transform(
            this.entities,
            this.searchFields,
            this.form.controls["search"].value
        );
    }
}
