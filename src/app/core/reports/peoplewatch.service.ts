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
import { ISearchEmployeesParams } from "./models/search-employees-params.model"

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
                            endMoment: new Date(change.endMoment),
                            startMoment: new Date(change.startMoment),
                            start_date: new Date(change.start_date),
                            end_date: new Date(change.end_date),
                            last_updated: new Date(change.last_updated),
                            current_start_date: new Date(
                                change.current_start_date
                            )
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

    public searchEmployees(model: ISearchEmployeesParams): Observable<ISearchEmployeesEntity[]> {
        return this._httpHelper.post(
            true,
            this._configService.API.Peoplewatch.searchEmployees(),
            model
        );
    }

    public searchEmployeesExportToXLSX(regex: string): Observable<Blob> {
        return this._httpHelper.post(
            true,
            this._configService.API.Peoplewatch.searchEmployeesExportToXLSX(),
            { regex },
            {},
            'blob'
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
}
