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
    { id: 8, name: 'Tver' },
    { id: 9, name: 'Tula' },
    { id: 10, name: 'Vladimir' },
    { id: 11, name: 'Yaroslavl' },
    { id: 12, name: 'Vologda' },
    { id: 13, name: 'Kostroma' },
    { id: 14, name: 'Rostov-na-Donu' },
    { id: 15, name: 'Voronezh' },
    { id: 16, name: 'Krasnodar' },
    { id: 17, name: 'Belgorod' },
    { id: 18, name: 'Kaluga' },
    { id: 19, name: 'Volgograd' },
    { id: 20, name: 'Saratov' },
    { id: 21, name: 'Samara' },
  ];

  constructor() { }

  getAll(): Observable<IGeo[]> {
    return of(this.geos);
  }
}
