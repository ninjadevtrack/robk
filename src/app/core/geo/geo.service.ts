import { Injectable } from '@angular/core';
import { IGeo } from "./geo";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IGeo[]> {
    return this.http.get<IGeo[]>("./assets/data/geos.json");
  }
}
