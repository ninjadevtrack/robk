import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EEntityEventType } from '../entity-event-type.enum';
import { EntityEventTypeLabelsService } from '../entity-event-type-labels.service';
import { IEntityEvent } from '../entity-event.model';

@Component({
  selector: 'app-entity-menu',
  templateUrl: './entity-menu.component.html',
  styleUrls: ['./entity-menu.component.scss']
})
export class EntityMenuComponent implements OnInit {

  @Input() id: string;
  @Input() eventTypes: EEntityEventType[];
  @Output() event = new EventEmitter<IEntityEvent>();

  constructor(
      private _entityMenuCommandLabelsService: EntityEventTypeLabelsService
  ) { }

  ngOnInit() {
  }

  getLabel(eventType: EEntityEventType) {
    return this._entityMenuCommandLabelsService.getLabel(eventType);
  }

  onClick(eventType: EEntityEventType) {
    this.event.emit({
       id:  this.id,
       type: eventType
    });
  }

}
