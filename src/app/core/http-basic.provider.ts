import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpBasic extends Http {

    constructor (backend: XHRBackend, options: RequestOptions) {
        options.headers.set('Content-Type', 'application/json');
        super(backend, options);
    }
}
