import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { IndividualLessonModel } from './model/individual-lesson.model';
import { HttpHelperService } from "../http-helper.service";

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

}
