import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpJWT } from '../http-jwt.provider';
import { IMediaPlan,MediaPlanModel, MediaPlansResultModel } from './model/media-plan.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class MediaPlanService {
    constructor(private _http: HttpJWT,
                private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<MediaPlansResultModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.default());
    }

    public getAllActive(): Observable<MediaPlansResultModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.getAllActive());
    }

    public getAllArchived(): Observable<MediaPlansResultModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.getAllArchived());
    }

    public add(model: MediaPlanModel): Observable<MediaPlanModel> {
        return this._httpHelper.post(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.default(), model);
    }

    public get(id: string): Observable<MediaPlanModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.dafaultWithId(id));
    }

    public delete(id: string): Observable<MediaPlanModel> {
        return this._httpHelper.delete(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.dafaultWithId(id));
    }

    public update(id: string, model: MediaPlanModel): Observable<MediaPlanModel> {
        return this._httpHelper.put(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<MediaPlanModel> {
        return this._httpHelper.put(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.activate(id), {});
    }

    public archive(id: string): Observable<MediaPlanModel> {
        return this._httpHelper.put(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.archive(id), {});
    }

    public duplicate(id: string): Observable<IMediaPlan> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.MediaPlan.duplicate(id));
    }

}
