import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { IProject, ProjectModel } from './model/project.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class ProjectService {
    constructor(private _configService: ConfigService,
                private _httpHelper: HttpHelperService) {

    }

    public getAll(): Observable<ProjectModel[]> {
        return this._httpHelper.get(true, this._configService.API.Project.default());
    }

    public getAllActive(): Observable<ProjectModel[]> {
        return this._httpHelper.get(true, this._configService.API.Project.getAllActive());
    }

    public getAllArchived(): Observable<ProjectModel[]> {
        return this._httpHelper.get(true, this._configService.API.Project.getAllArchived());
    }

    public add(model: ProjectModel): Observable<ProjectModel> {
        return this._httpHelper.post(true, this._configService.API.Project.default(), model);
    }

    public get(id: string): Observable<ProjectModel> {
        return this._httpHelper.get(true, this._configService.API.Project.dafaultWithId(id));
    }

    public delete(id: string): Observable<ProjectModel> {
        return this._httpHelper.delete(true, this._configService.API.Project.dafaultWithId(id));
    }

    public update(id: string, model: ProjectModel): Observable<ProjectModel> {
        return this._httpHelper.put(true, this._configService.API.Project.dafaultWithId(id), model);
    }

    public activate(id: string): Observable<ProjectModel> {
        return this._httpHelper.get(true, this._configService.API.Project.activate(id));
    }

    public archive(id: string): Observable<ProjectModel> {
        return this._httpHelper.get(true, this._configService.API.Project.archive(id));
    }

}
