import {Injectable} from '@angular/core';
import {EEntityMenuCommand} from './entity-menu-command.enum';

@Injectable({
  providedIn: 'root'
})
export class EntityMenuCommandLabelsService {

  constructor() { }

  public getLabel(command: EEntityMenuCommand): string {
    switch (command) {
        case EEntityMenuCommand.ACTIVATE:
          return 'Activate';
        case EEntityMenuCommand.ARCHIVE:
          return 'Archive';
        case EEntityMenuCommand.DELETE:
          return 'Delete';
        case EEntityMenuCommand.UPDATE:
          return 'Update';
        default:
          return 'Unknown Action';
    }
  }
}
