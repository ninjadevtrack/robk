import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ClientModel } from './model/client.model';
import { HttpHelperService } from "../http-helper.service";
import {StudentModel} from '../student/model/student.model';

@Injectable()
export class ClientService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<ClientModel[]> {
        return this._httpHelper.get(true, this._configService.API.Client.default());
    }

    public getAllActive(): Observable<ClientModel[]> {
        return this._httpHelper.get(true, this._configService.API.Client.getAllActive());
    }

    public getAllArchived(): Observable<ClientModel[]> {
        return this._httpHelper.get(true, this._configService.API.Client.getAllArchived());
    }

    public getStudents(id: string): Observable<StudentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Client.getStudents(id));
    }

    public add(model: ClientModel): Observable<ClientModel> {
        return this._httpHelper.post(true, this._configService.API.Client.default(), model);
    }

    public get(id: string): Observable<ClientModel> {
        return this._httpHelper.get(true, this._configService.API.Client.dafaultWithId(id));
    }

    public delete(id: string): Observable<ClientModel> {
        return this._httpHelper.delete(true, this._configService.API.Client.dafaultWithId(id));
    }

    public update(id: string, model: ClientModel): Observable<ClientModel> {
        return this._httpHelper.put(true, this._configService.API.Client.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<ClientModel> {
        return this._httpHelper.get(true, this._configService.API.Client.activate(id));
    }

    public archive(id: string): Observable<ClientModel> {
        return this._httpHelper.get(true, this._configService.API.Client.archive(id));
    }

}
