import { Injectable } from '@angular/core';
import { IAudience } from "./audience";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AudienceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IAudience[]> {
    return this.http.get<any>("./assets/data/audience.json");
  }

}
