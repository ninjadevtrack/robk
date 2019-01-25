import { Injectable } from '@angular/core';
import { ConfigService } from '../common/config.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { IndividualLessonModel } from './model/individual-lesson.model';
import { HttpHelperService } from "../http-helper.service";
import { IIndividualLessonAction } from './model/individual-lesson-action.interface';
import {IDateRange} from '../common/models/date-range.model';
import {IIndividualLessonStateChangeLogEntry} from './model/individual-lesson-state-change-log-entry.interface';

@Injectable()
export class IndividualLessonService  {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<IndividualLessonModel[]> {
        return this._httpHelper.get(true, this._configService.API.IndividualLesson.default());
    }

    public add(model: IndividualLessonModel): Observable<IndividualLessonModel> {
        return this._httpHelper.post(true, this._configService.API.IndividualLesson.default(), model);
    }

    public search(teacherIds: string[], studentIds: string[]): Observable<IndividualLessonModel[]> {
        return this._httpHelper.post(true, this._configService.API.IndividualLesson.search(), {
            teachers: teacherIds,
            students: studentIds
        });
    }

    public get(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.get(true, this._configService.API.IndividualLesson.dafaultWithId(id));
    }

    public delete(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.delete(true, this._configService.API.IndividualLesson.dafaultWithId(id));
    }

    public update(id: string, model: IndividualLessonModel): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.dafaultWithId(id), model);
    }

    public getAvailableActions(id: string): Observable<IIndividualLessonAction[]> {
        return this._httpHelper.get(true, this._configService.API.IndividualLesson.availableActions(id));
    }

    public acceptAppointment(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.acceptAppointment(id), null);
    }

    public proposeNewTime(id: string, dateRange: IDateRange): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.proposeNewTime(id), dateRange);
    }

    public declineAppointment(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.declineAppointment(id), null);
    }

    public cancelAppointment(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.cancelAppointment(id), null);
    }

    public approveAppointmentPassed(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.approveAppointmentPassed(id), null);
    }

    public setPassedWithoutMoneyWithdrawal(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.setPassedWithoutMoneyWithdrawal(id), null);
    }

    public setPassedWithForcedMoneyWithdrawal(id: string): Observable<IndividualLessonModel> {
        return this._httpHelper.put(true, this._configService.API.IndividualLesson.setPassedWithForcedMoneyWithdrawal(id), null);
    }

    public getStateChangeLogEntries(id: string): Observable<IIndividualLessonStateChangeLogEntry[]> {
        return this._httpHelper.get(true, this._configService.API.IndividualLesson.getStateChangeLogEntries(id));
    }

}
