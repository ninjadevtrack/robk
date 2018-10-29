import { Injectable } from '@angular/core';
import {
    Http,
    XHRBackend,
    RequestOptions,
    Request,
    RequestOptionsArgs,
    Response
} from '@angular/http';
import { Router } from '@angular/router';
import { HttpBasic } from './http-basic.provider';
import { Consts } from './common/config.service';
import { AuthStorageService } from './common/auth-storage.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable}  from "rxjs/Observable";

@Injectable()
export class HttpJWT extends Http {

    constructor (
        backend: XHRBackend,
        options: RequestOptions,
        private _router: Router,
        private _httpBasic: HttpBasic,
        private _session: AuthStorageService
        ) {
            super(backend, options);
            options.headers.set('Content-Type', 'application/json');
    }

    public request(req: Request, options?: RequestOptionsArgs): Observable<Response> {
        let token = this._session.getItem(Consts.AUTH_TOKEN_KEY);
        req.headers.set('Authorization', token);
        return super.request(req, options).catch(this.catchAuthError(this, req, options));
    }

    private catchAuthError(self: HttpJWT, req: Request, options?: RequestOptionsArgs) {
        // we have to pass HttpService's own instance here as `self`
        return (res: Response) => {
            if (res.status === 401) {
                this._router.navigateByUrl('/');
                console.log(res);
            }
            return Observable.throw(res);
        };
    }
}
