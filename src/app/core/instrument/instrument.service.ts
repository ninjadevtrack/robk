import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { IService, InstrumentModel } from './model/instrument.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class InstrumentService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<InstrumentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Service.default());
    }

    public getAllActive(): Observable<InstrumentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Service.getAllActive());
    }

    public getAllArchived(): Observable<InstrumentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Service.getAllArchived());
    }

    public add(model: InstrumentModel): Observable<InstrumentModel> {
        return this._httpHelper.post(true, this._configService.API.Service.default(), model);
    }

    public get(id: string): Observable<InstrumentModel> {
        return this._httpHelper.get(true, this._configService.API.Service.dafaultWithId(id));
    }

    public delete(id: string): Observable<InstrumentModel> {
        return this._httpHelper.delete(true, this._configService.API.Service.dafaultWithId(id));
    }

    public update(id: string, model: InstrumentModel): Observable<InstrumentModel> {
        return this._httpHelper.put(true, this._configService.API.Service.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<InstrumentModel> {
        return this._httpHelper.get(true, this._configService.API.Service.activate(id));
    }

    public archive(id: string): Observable<InstrumentModel> {
        return this._httpHelper.get(true, this._configService.API.Service.archive(id));
    }

}
