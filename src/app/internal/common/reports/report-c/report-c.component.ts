import { Component, OnInit } from "@angular/core";
import moment from "moment";
import { Observable } from "rxjs";
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { IReportCEntity } from "src/app/core/reports/models/report-c.model";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";

@Component({
    selector: "app-report-c",
    templateUrl: "./report-c.component.html",
    styleUrls: ["./report-c.component.css"]
})
export class ReportCComponent implements OnInit {
    entities: IReportCEntity[];
    searchPipe: SearchPipe = new SearchPipe();
    form: UntypedFormGroup;
    searchFields: string;

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _peopleWatchService: PeopleWatchService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngOnInit(): void {
        this.searchFields = ["id", "name", "robScore"].join(",");
        this.form = this._formBuilder.group({
            search: ["", []]
        });
        this._peopleWatchService
            .reportC()
            .subscribe((entities: IReportCEntity[]) => {
                this.entities = entities;
            });
        this._smoothScrollService.scrollTo(0, 0);
    }

    getFilteredEntities(): IReportCEntity[] {
        return this.searchPipe.transform(
            this.entities,
            this.searchFields,
            this.form.controls["search"].value
        );
    }
}
