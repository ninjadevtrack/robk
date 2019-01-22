import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs/index";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { AuthStorageService } from "./common/auth-storage.service";
import { Consts } from './common/config.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

    constructor(
        private _router: Router,
        private _httpClient: HttpClient,
        private _session: AuthStorageService
    ) { }


    private getHttpOptions(secured) {

        if (!secured) {
            return {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json'
                })
            };
        }

        const token = this._session.getItem(Consts.AUTH_TOKEN_KEY);

        return {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': token
            })
        };
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if (error.status === 401) {
                this._router.navigateByUrl('/');
            }

            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }

    public get<T>(secured, url): Observable<T> {
        return this._httpClient.get<T>(url, this.getHttpOptions(secured))
            .pipe(catchError((err: HttpErrorResponse) => {
                return this.handleError(err);
            }));
    }

    public post<T>(secured, url, data): Observable<T> {
        return this._httpClient.post<T>(url, data, this.getHttpOptions(secured))
            .pipe(catchError((err: HttpErrorResponse) => {
                return this.handleError(err);
            }));
    }

    public delete<T>(secured, url): Observable<T> {
        return this._httpClient.delete<T>(url, this.getHttpOptions(secured))
            .pipe(catchError((err: HttpErrorResponse) => {
                return this.handleError(err);
            }));
    }

    public put<T>(secured, url, data): Observable<T> {
        return this._httpClient.put<T>(url, data, this.getHttpOptions(secured))
            .pipe(catchError((err: HttpErrorResponse) => {
                return this.handleError(err);
            }));
    }
}
