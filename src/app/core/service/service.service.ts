import { Injectable } from '@angular/core';
import { ConfigService } from '../common/config.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ServiceModel } from './model/service.model';
import { HttpHelperService } from "../http-helper.service";
import {IEntityService} from '../entity-service.model';

@Injectable()
export class ServiceService implements IEntityService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<ServiceModel[]> {
        return this._httpHelper.get(true, this._configService.API.Service.default());
    }

    public getAllActive(): Observable<ServiceModel[]> {
        return this._httpHelper.get(true, this._configService.API.Service.getAllActive());
    }

    public getAllArchived(): Observable<ServiceModel[]> {
        return this._httpHelper.get(true, this._configService.API.Service.getAllArchived());
    }

    public add(model: ServiceModel): Observable<ServiceModel> {
        return this._httpHelper.post(true, this._configService.API.Service.default(), model);
    }

    public get(id: string): Observable<ServiceModel> {
        return this._httpHelper.get(true, this._configService.API.Service.dafaultWithId(id));
    }

    public delete(id: string): Observable<ServiceModel> {
        return this._httpHelper.delete(true, this._configService.API.Service.dafaultWithId(id));
    }

    public update(id: string, model: ServiceModel): Observable<ServiceModel> {
        return this._httpHelper.put(true, this._configService.API.Service.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<ServiceModel> {
        return this._httpHelper.get(true, this._configService.API.Service.activate(id));
    }

    public archive(id: string): Observable<ServiceModel> {
        return this._httpHelper.get(true, this._configService.API.Service.archive(id));
    }

}
