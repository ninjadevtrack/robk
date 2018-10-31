import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import { Observable } from 'rxjs';
import { UserModel, UsersResultModel } from './model/user.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class UserService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public profile(): Observable<UserModel> {
        return this._httpHelper.get(true, this._configService.API.User.profile());
    }

    public get(id: string): Observable<UserModel> {
        return this._httpHelper.get(true, this._configService.API.User.dafaultWithId(id));
    }

    public getAll(): Observable<UsersResultModel> {
        return this._httpHelper.get(true, this._configService.API.User.getAll());
    }

    public getAllActive(): Observable<UsersResultModel> {
        return this._httpHelper.get(true, this._configService.API.User.getAllActive());
    }

    public getAllArchived(): Observable<UsersResultModel> {
        return this._httpHelper.get(true, this._configService.API.User.getAllArchived());
    }
}
