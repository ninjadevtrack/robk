import { Injectable } from '@angular/core';
import { ConfigService } from '../common/config.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { TeacherModel } from './model/teacher.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class TeacherService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<TeacherModel[]> {
        return this._httpHelper.get(true, this._configService.API.Teacher.default());
    }

    public getAllActive(): Observable<TeacherModel[]> {
        return this._httpHelper.get(true, this._configService.API.Teacher.getAllActive());
    }

    public getAllArchived(): Observable<TeacherModel[]> {
        return this._httpHelper.get(true, this._configService.API.Teacher.getAllArchived());
    }

    public add(model: TeacherModel): Observable<TeacherModel> {
        return this._httpHelper.post(true, this._configService.API.Teacher.default(), model);
    }

    public get(id: string): Observable<TeacherModel> {
        return this._httpHelper.get(true, this._configService.API.Teacher.dafaultWithId(id));
    }

    public delete(id: string): Observable<TeacherModel> {
        return this._httpHelper.delete(true, this._configService.API.Teacher.dafaultWithId(id));
    }

    public update(id: string, model: TeacherModel): Observable<TeacherModel> {
        return this._httpHelper.put(true, this._configService.API.Teacher.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<TeacherModel> {
        return this._httpHelper.get(true, this._configService.API.Teacher.activate(id));
    }

    public archive(id: string): Observable<TeacherModel> {
        return this._httpHelper.get(true, this._configService.API.Teacher.archive(id));
    }

}
