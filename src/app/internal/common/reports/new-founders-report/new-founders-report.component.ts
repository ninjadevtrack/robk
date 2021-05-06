import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { INewFoundersEntity } from "src/app/core/reports/models/new-founders.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";

@Component({
    selector: "new-founders",
    templateUrl: "./new-founders-report.component.html",
    styleUrls: ["./new-founders-report.component.css"]
})
export class NewFoundersReportComponent implements OnInit {
    entities: INewFoundersEntity[];
    searchPipe: SearchPipe = new SearchPipe();
    form: FormGroup;
    searchFields: string;

    constructor(
        private _formBuilder: FormBuilder,
        private _peopleWatchService: PeopleWatchService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngOnInit(): void {
        this.searchFields = ["firstName", "lastName", "occupation"].join(",");
        this.form = this._formBuilder.group({
            search: ["", []]
        });
        this._peopleWatchService
            .reportNewFounders()
            .subscribe((entities: INewFoundersEntity[]) => {
                this.entities = entities;
            });
        this._smoothScrollService.scrollTo(0, 0);
    }

    getFilteredEntities(): INewFoundersEntity[] {
        return this.searchPipe.transform(
            this.entities,
            this.searchFields,
            this.form.controls["search"].value
        );
    }
}
