import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "../common/config.service";
import { HttpHelperService } from "../http-helper.service";
import { IEmployerChange } from "./models/employer-change.model";
import { INewFoundersEntity } from "./models/new-founders.model";
import { IReportBEntity } from "./models/report-b.model";
import { IReportCEntity } from "./models/report-c.model";
import { ISearchEmployeesEntity } from "./models/search-employees.model";
import {
    EmployeeSearchField,
    ISearchEmployeesParams
} from "./models/search-employees-params.model";
import * as moment from "moment";
@Injectable()
export class PeopleWatchService {
    constructor(
        private _configService: ConfigService,
        private _httpHelper: HttpHelperService
    ) {}

    public getEmployerChanges(): Observable<IEmployerChange[]> {
        return this._httpHelper
            .get(true, this._configService.API.Peoplewatch.employerChanges())
            .pipe(
                map((changes: any[]) => {
                    return changes.map(change => {
                        return {
                            ...change,
                            endMoment: change.endMoment,
                            startMoment: change.startMoment,
                            start_date: moment(change.start_date),
                            end_date: moment(change.end_date),
                            last_updated: moment(change.last_updated),
                            current_start_date: moment(change.start_date),
                            since_string: change.since_string,
                            last_updated_string: change.last_updated_string
                        };
                    });
                })
            );
    }

    public reportNewFounders(): Observable<INewFoundersEntity[]> {
        return this._httpHelper.get(
            true,
            this._configService.API.Peoplewatch.newFounders()
        );
    }

    public searchEmployees(
        model: ISearchEmployeesParams
    ): Observable<ISearchEmployeesEntity[]> {
        return this._httpHelper.post(
            true,
            this._configService.API.Peoplewatch.searchEmployees(),
            model
        );
    }

    public searchEmployeesExportToXLSX(
        model: ISearchEmployeesParams
    ): Observable<Blob> {
        return this._httpHelper.post(
            true,
            this._configService.API.Peoplewatch.searchEmployeesExportToXLSX(),
            model,
            {},
            "blob"
        );
    }

    public reportB(): Observable<IReportBEntity[]> {
        return this._httpHelper.get(
            true,
            this._configService.API.Peoplewatch.reportB()
        );
    }

    public reportC(): Observable<IReportCEntity[]> {
        return this._httpHelper.get(
            true,
            this._configService.API.Peoplewatch.reportC()
        );
    }

    public getEmployeeSearchFieldName(searchField: EmployeeSearchField) {
        switch (searchField) {
            case EmployeeSearchField.OCCUPATION:
                return "Occupation History";
            case EmployeeSearchField.HISTORY_DESCRIPTION:
                return "Role History";
            default:
                return "";
        }
    }
}
