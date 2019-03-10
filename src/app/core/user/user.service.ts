import { Injectable } from '@angular/core';
import { ConfigService } from '../common/config.service';
import { Observable } from 'rxjs';
import { UserModel } from './model/user.model';
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

    public getAll(): Observable<UserModel[]> {
        return this._httpHelper.get(true, this._configService.API.User.default());
    }

    public getAllActive(): Observable<UserModel[]> {
        return this._httpHelper.get(true, this._configService.API.User.getAllActive());
    }

    public getAllArchived(): Observable<UserModel[]> {
        return this._httpHelper.get(true, this._configService.API.User.getAllArchived());
    }

    public add(model: UserModel): Observable<UserModel> {
        return this._httpHelper.post(true, this._configService.API.User.default(), model);
    }

    public delete(id: string): Observable<UserModel> {
        return this._httpHelper.delete(true, this._configService.API.User.dafaultWithId(id));
    }

    public update(id: string, model: UserModel): Observable<UserModel> {
        return this._httpHelper.put(true, this._configService.API.User.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<UserModel> {
        return this._httpHelper.get(true, this._configService.API.User.activate(id));
    }

    public archive(id: string): Observable<UserModel> {
        return this._httpHelper.get(true, this._configService.API.User.archive(id));
    }

    public getAllAvailableRoles(): Observable<string[]> {
        return this._httpHelper.get(true, this._configService.API.User.getAllAvailableRoles());
    }
}
