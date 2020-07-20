import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { IEmployerChange } from "src/app/core/reports/models/employer-change.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";

@Component({
    selector: "app-employer-change-report",
    templateUrl: "./employer-change-report.component.html",
    styleUrls: ["./employer-change-report.component.css"]
})
export class EmployerChangeReportComponent implements OnInit {
    employerChanges: IEmployerChange[];
    searchPipe: SearchPipe = new SearchPipe();
    form: FormGroup;
    searchFields: string;

    constructor(
        private _formBuilder: FormBuilder,
        private _peopleWatchService: PeopleWatchService
    ) {}

    ngOnInit(): void {
        this.searchFields = [
            "firstName",
            "lastName",
            "prior_employer_name",
            "current_employer_name",
            "current_occupation",
            "location",
            "founderScore",
            "careerScore"
        ].join(",");
        this.form = this._formBuilder.group({
            search: ["", []]
        });
        this._peopleWatchService
            .getEmployerChanges()
            .subscribe((employerChanges: IEmployerChange[]) => {
                this.employerChanges = employerChanges;
            });
    }

    getLevel(employerChange: IEmployerChange): string {
        let res = "";
        res += employerChange.founder === 1 ? "FOUNDER" : "NON FOUNDER";
        res += employerChange.ceo === 1 ? "/ CEO" : "/ UNKNOWN";

        return res;
    }

    getHumanizedTimeAgo(date: Date): string {
        const scoreTime = moment(date),
            duration = moment.duration(scoreTime.diff(moment(new Date())));

        return duration.humanize() + " ago";
    }

    getLinkedinProfileLink(employerChange: IEmployerChange): string {
        return `https://linkedin.com/in/${employerChange.publicIdentifier}`;
    }

    getFilteredEntities() {
        return this.searchPipe.transform(
            this.employerChanges,
            this.searchFields,
            this.form.controls["search"].value
        );
    }
}
