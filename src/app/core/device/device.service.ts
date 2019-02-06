import { Injectable } from '@angular/core';
import { IDevice } from "./device";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices: IDevice[] = [
    { id: 1, name: 'Desktop' },
    { id: 2, name: 'Android Phone' },
    { id: 3, name: 'Android Tab' },
    { id: 4, name: 'iPhone' },
    { id: 5, name: 'iPad' }
  ];

  constructor() { }

  getAll(): Observable<IDevice[]> {
    return of(this.devices);
  }
}
