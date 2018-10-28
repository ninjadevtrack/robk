import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import { Observable } from 'rxjs';
import { HttpJWT } from '../http-jwt.provider';
import { UserModel, UsersResultModel } from './model/user.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class UserService {
    constructor(private _http: HttpJWT,
                private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public profile(): Observable<UserModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.User.profile());
    }

    public get(id: string): Observable<UserModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.User.dafaultWithId(id));
    }

    public getAll(): Observable<UsersResultModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.User.getAll());
    }

    public getAllActive(): Observable<UsersResultModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.User.getAllActive());
    }

    public getAllArchived(): Observable<UsersResultModel> {
        return this._httpHelper.get(this._http, this._configService.TECHTON_PLANNER_API.User.getAllArchived());
    }
}
