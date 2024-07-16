import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IEntityEvent} from '../entity-event.model';
import {EEntityEventType} from '../entity-event-type.enum';

@Component({
  selector: 'app-entity-table',
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.scss']
})
export class EntityTableComponent implements OnInit {

  @Input() pathToViewComponent: string;
  @Input() eventTypes: EEntityEventType[];
  @Input() entities: any[];
  @Input() fields: string[];
  @Input() fieldLabels: string[];

  @Output() event = new EventEmitter<IEntityEvent>();

  constructor() { }

  ngOnInit() {

  }

  propagateEvent(event: IEntityEvent) {
    this.event.emit(event);
  }

}
