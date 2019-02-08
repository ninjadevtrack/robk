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
    return this.http.get<any>("./assets/data/interests.json").map((values) => {
      return values.map((v) => { return {
          id: parseInt(v["1"], 10),
          name: v["2"],
          parentId: parseInt(v["3"], 10)
        };
      });
    });
  }
}
