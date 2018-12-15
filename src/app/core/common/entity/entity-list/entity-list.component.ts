import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EEntityEventType} from '../entity-event-type.enum';
import {IEntityEvent} from '../entity-event.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  @Input() entities: any[];
  @Input() fields: string[];
  @Input() fieldLabels: string[];
  @Input() eventTypesForActiveEntities: EEntityEventType[];
  @Input() eventTypesForArchivedEntities: EEntityEventType[];
  @Output() event = new EventEmitter<IEntityEvent>();

  constructor() { }

  ngOnInit() {
  }

  getActiveEntities() {
    return this.entities.filter(e => e.isActive);
  }

  getArchivedEntities() {
      return this.entities.filter(e => !e.isActive);
  }

  propagateEvent(event: IEntityEvent) {
      this.event.emit(event);
  }

  addEntity() {
    this.event.emit({
        id: null,
        type: EEntityEventType.ADD
    });
  }

}
