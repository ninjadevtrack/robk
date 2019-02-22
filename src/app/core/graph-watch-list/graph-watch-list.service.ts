import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ConfigService} from "../common/config.service";
import {HttpHelperService} from "../http-helper.service";
import {ICompany} from "./model/company.model";

@Injectable()
export class GraphWatchListService {

  constructor(
      private _configService: ConfigService,
      private  _httpHelper: HttpHelperService
  ) { }

  public getCompanies(): Observable<ICompany[]> {
    return this._httpHelper.get(true, this._configService.API.GraphWatchlist.default() );
  }
}
