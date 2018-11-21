import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable()
export class AppealService {

  private appeals = ['Mr.', 'Mrs.', 'Ms.'];

  constructor() { }

  public getAll(): Observable<string[]> {
    return Observable.of(this.appeals);
  }
}
