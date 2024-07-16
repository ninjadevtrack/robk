import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface IEntityService {
    getAll(): Observable<any>;
    getAllActive(): Observable<any>;
    getAllArchived(): Observable<any>;
    add(model: any): Observable<any>;
    get(id: string): Observable<any>;
    delete(id: string): Observable<any>;
    update(id: string, model: any): Observable<any>;
    activate(id: string): Observable<any>;
    archive(id: string): Observable<any>;
}
