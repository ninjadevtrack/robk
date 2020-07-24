import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "../common/config.service";
import { HttpHelperService } from "../http-helper.service";
import { IEmployerChange } from "./models/employer-change.model";
import { IReportAEntity } from "./models/report-a.model";
import { IReportBEntity } from "./models/report-b.model";
import { IReportCEntity } from "./models/report-c.model";

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

    public reportA(): Observable<IReportAEntity[]> {
        return this._httpHelper.get(
            true,
            this._configService.API.Peoplewatch.reportA()
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
