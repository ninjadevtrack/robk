import { Component, OnInit } from "@angular/core";
import { EmployerChangeService } from "src/app/core/reports/employer-change.service";
import { Observable } from "rxjs";
import { IEmployerChange } from "src/app/core/reports/models/employer-change.model";

@Component({
    selector: "app-employer-change-report",
    templateUrl: "./employer-change-report.component.html",
    styleUrls: ["./employer-change-report.component.css"]
})
export class EmployerChangeReportComponent implements OnInit {
    employerChanges$: Observable<IEmployerChange[]>;

    constructor(private _employerChangesService: EmployerChangeService) {}

    ngOnInit(): void {
        this.employerChanges$ = this._employerChangesService.getEmployerChanges();
    }

    getLevel(employerChange: IEmployerChange): string {
        let res = "";
        res += employerChange.founder === 1 ? "FOUNDER" : "NON FOUNDER";
        res += employerChange.ceo === 1 ? "/ CEO" : "/ UNKNOWN";

        return res;
    }
}
