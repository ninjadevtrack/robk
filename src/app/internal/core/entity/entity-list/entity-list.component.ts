import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EEntityEventType} from '../entity-event-type.enum';
import {IEntityEvent} from '../entity-event.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchPipe} from '../../search.pipe';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  @Input() floatingAddButton: boolean = true;
  @Input() searchFieldEnabled: boolean = true;
  @Input() addEntityEnabled: boolean = true;
  @Input() searchFields: string;
  @Input() pathToViewComponent: string;
  @Input() entities: any[];
  @Input() fields: string[];
  @Input() fieldLabels: string[];
  @Input() eventTypesForActiveEntities: EEntityEventType[];
  @Input() eventTypesForArchivedEntities: EEntityEventType[];
  @Output() event = new EventEmitter<IEntityEvent>();
  searchPipe: SearchPipe = new SearchPipe();
  form: FormGroup;
  addEntityButtonClass: string = 'floating-button';

  constructor(
      private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
      this.form = this._formBuilder.group({
          search: ['', []]
      });

      if (!this.floatingAddButton) {
          this.addEntityButtonClass = 'fixed-button';
      }
  }

  getEntities(isActive: boolean) {
      if (!this.entities) { return; }

      return this.entities.filter(e => e.isActive === isActive);
  }

  public getFilteredActiveEntities() {
      return this.searchPipe.transform(this.getEntities(true), this.searchFields, this.form.controls['search'].value);
  }

  public getFilteredArchivedEntities() {
      return this.searchPipe.transform(this.getEntities(false), this.searchFields, this.form.controls['search'].value);
  }

  propagateEvent(event: IEntityEvent) {
      this.event.emit(event);
  }

  addEntity() {
    if (!this.addEntityEnabled) { return; }
    
    this.event.emit({
        id: null,
        type: EEntityEventType.ADD
    });
  }

}
