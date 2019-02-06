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
    { id: 5, name: 'IT' },
    { id: 6, name: 'Art' },
    { id: 7, name: 'Politics' },
    { id: 8, name: 'USA' },
    { id: 9, name: 'Russia' },
    { id: 10, name: 'Geography' },
    { id: 11, name: 'History' },
    { id: 12, name: 'Math' },
    { id: 13, name: 'Biology' },
    { id: 14, name: 'Physics' },
    { id: 15, name: 'Economics' }
  ];

  constructor() { }

  getAll(): Observable<IInterest[]> {
    return of(this.interests);
  }
}
