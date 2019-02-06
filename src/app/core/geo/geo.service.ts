import { Injectable } from '@angular/core';
import {IGeo} from "./geo";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  geos: IGeo[] = [
    { id: 1, name: 'Moscow' },
    { id: 2, name: 'St. Petersburg' },
    { id: 3, name: 'Ekaterinburg' },
    { id: 4, name: 'Nizhniy Novgorod' },
    { id: 5, name: 'Novosibirsk' },
    { id: 6, name: 'Murmanks' },
    { id: 7, name: 'Sochi' },
  ];

  constructor() { }

  getAll(): Observable<IGeo[]> {
    return of(this.geos);
  }
}
