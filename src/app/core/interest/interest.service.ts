import { Injectable } from '@angular/core';
import { IInterest } from "./interest";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IInterest[]> {
    return this.http.get<IInterest[]>("./assets/data/interests.json");
  }
}
