import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { StudentModel } from './model/student.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class StudentService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<StudentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Student.default());
    }

    public getAllActive(): Observable<StudentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Student.getAllActive());
    }

    public getAllArchived(): Observable<StudentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Student.getAllArchived());
    }

    public add(model: StudentModel): Observable<StudentModel> {
        return this._httpHelper.post(true, this._configService.API.Student.default(), model);
    }

    public get(id: string): Observable<StudentModel> {
        return this._httpHelper.get(true, this._configService.API.Student.dafaultWithId(id));
    }

    public delete(id: string): Observable<StudentModel> {
        return this._httpHelper.delete(true, this._configService.API.Student.dafaultWithId(id));
    }

    public update(id: string, model: StudentModel): Observable<StudentModel> {
        return this._httpHelper.put(true, this._configService.API.Student.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<StudentModel> {
        return this._httpHelper.get(true, this._configService.API.Student.activate(id));
    }

    public archive(id: string): Observable<StudentModel> {
        return this._httpHelper.get(true, this._configService.API.Student.archive(id));
    }

}
