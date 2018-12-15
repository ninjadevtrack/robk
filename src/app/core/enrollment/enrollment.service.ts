import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { EnrollmentModel } from './model/enrollment.model';
import { HttpHelperService } from "../http-helper.service";
import { IEntityService } from '../entity-service.model';

@Injectable()
export class EnrollmentService implements IEntityService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<EnrollmentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Enrollment.default());
    }

    public getAllActive(): Observable<EnrollmentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Enrollment.getAllActive());
    }

    public getAllArchived(): Observable<EnrollmentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Enrollment.getAllArchived());
    }

    public add(model: EnrollmentModel): Observable<EnrollmentModel> {
        return this._httpHelper.post(true, this._configService.API.Enrollment.default(), model);
    }

    public get(id: string): Observable<EnrollmentModel> {
        return this._httpHelper.get(true, this._configService.API.Enrollment.dafaultWithId(id));
    }

    public delete(id: string): Observable<EnrollmentModel> {
        return this._httpHelper.delete(true, this._configService.API.Enrollment.dafaultWithId(id));
    }

    public update(id: string, model: EnrollmentModel): Observable<EnrollmentModel> {
        return this._httpHelper.put(true, this._configService.API.Enrollment.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<EnrollmentModel> {
        return this._httpHelper.get(true, this._configService.API.Enrollment.activate(id));
    }

    public archive(id: string): Observable<EnrollmentModel> {
        return this._httpHelper.get(true, this._configService.API.Enrollment.archive(id));
    }

}
