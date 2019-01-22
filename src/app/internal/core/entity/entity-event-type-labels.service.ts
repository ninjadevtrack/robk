import {Injectable} from '@angular/core';
import {EEntityEventType} from './entity-event-type.enum';

@Injectable({
  providedIn: 'root'
})
export class EntityEventTypeLabelsService {

  constructor() { }

  public getLabel(command: EEntityEventType): string {
    switch (command) {
        case EEntityEventType.ADD:
            return 'Add';
        case EEntityEventType.ACTIVATE:
          return 'Activate';
        case EEntityEventType.ARCHIVE:
          return 'Archive';
        case EEntityEventType.DELETE:
          return 'Delete';
        case EEntityEventType.UPDATE:
          return 'Update';
        default:
          return 'Unknown Action';
    }
  }
}
