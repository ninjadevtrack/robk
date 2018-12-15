import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { InstrumentModel } from './model/instrument.model';
import { HttpHelperService } from "../http-helper.service";
import {IEntityService} from '../entity-service.model';

@Injectable()
export class InstrumentService implements IEntityService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<InstrumentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Instrument.default());
    }

    public getAllActive(): Observable<InstrumentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Instrument.getAllActive());
    }

    public getAllArchived(): Observable<InstrumentModel[]> {
        return this._httpHelper.get(true, this._configService.API.Instrument.getAllArchived());
    }

    public add(model: InstrumentModel): Observable<InstrumentModel> {
        return this._httpHelper.post(true, this._configService.API.Instrument.default(), model);
    }

    public get(id: string): Observable<InstrumentModel> {
        return this._httpHelper.get(true, this._configService.API.Instrument.dafaultWithId(id));
    }

    public delete(id: string): Observable<InstrumentModel> {
        return this._httpHelper.delete(true, this._configService.API.Instrument.dafaultWithId(id));
    }

    public update(id: string, model: InstrumentModel): Observable<InstrumentModel> {
        return this._httpHelper.put(true, this._configService.API.Instrument.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<InstrumentModel> {
        return this._httpHelper.get(true, this._configService.API.Instrument.activate(id));
    }

    public archive(id: string): Observable<InstrumentModel> {
        return this._httpHelper.get(true, this._configService.API.Instrument.archive(id));
    }

}
