import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EEntityMenuCommand } from '../entity-menu-command.enum';
import { EntityMenuCommandLabelsService } from '../entity-menu-command-labels.service';
import { IEntityMenuEvent } from '../entity-menu-event.model';

@Component({
  selector: 'app-entity-menu',
  templateUrl: './entity-menu.component.html',
  styleUrls: ['./entity-menu.component.scss']
})
export class EntityMenuComponent implements OnInit {

  @Input() id: string;
  @Input() commands: EEntityMenuCommand[];
  @Output() itemSelected = new EventEmitter<IEntityMenuEvent>();

  constructor(
      private _entityMenuCommandLabelsService: EntityMenuCommandLabelsService
  ) { }

  ngOnInit() {
  }

  getLabel(command: EEntityMenuCommand) {
    return this._entityMenuCommandLabelsService.getLabel(command);
  }

  onClick(command: EEntityMenuCommand) {
    this.itemSelected.emit({
       id:  this.id,
       command: command
    });
  }

}
