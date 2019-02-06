import { Injectable } from '@angular/core';
import { IInterest } from "./interest";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class InterestService {

  interests: IInterest[] = [
    { id: 1, name: 'Parenting' },
    { id: 2, name: 'Gardening' },
    { id: 3, name: 'Makeup' },
    { id: 4, name: 'Sport' },
    { id: 5, name: 'IT' }
  ];

  constructor() { }

  getAll(): Observable<IInterest[]> {
    return of(this.interests);
  }
}
