import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor() { }

    public get(httpService, url) {
        return httpService.get(url)
            .pipe(map((res) => {
                return of(res);
            })).pipe(catchError((res) => {
                return throwError(of(res));
            }));
    }

    public post(httpService, url, data) {
        return httpService.post(url, data)
            .pipe(map((res) => {
                return of(res);
            })).pipe(catchError((res) => {
                return throwError(of(res));
            }));
    }

    public delete(httpService, url) {
        return httpService.delete(url)
            .pipe(map((res) => {
                return of(res);
            })).pipe(catchError((res) => {
                return throwError(of(res));
            }));
    }

    public put(httpService, url, data) {
        return httpService.put(url, data)
            .pipe(map((res) => {
                return of(res);
            })).pipe(catchError((res) => {
                return throwError(of(res));
            }));
    }
}
