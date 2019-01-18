import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material';
import {InstrumentService} from '../../../../core/instrument/instrument.service';
import {InstrumentAddComponent} from '../instrument-add/instrument-add.component';
import {EEntityEventType} from '../../../core/entity/entity-event-type.enum';
import {InstrumentEditComponent} from '../instrument-edit/instrument-edit.component';
import {EntityListComponentResolver} from '../../../core/entity/entity-list/entity-list.component.resolver';
import {ComponentType} from '@angular/cdk/typings/portal';
import {IEntityService} from '../../../../core/entity-service.model';

@Component({
    selector: 'instrument-list',
    styleUrls: [ './instrument-list.component.css' ],
    templateUrl: './instrument-list.component.html'
})
export class InstrumentListComponent extends EntityListComponentResolver implements OnInit {

    @Input() entities: any[];
    @Output() entitiesListShouldBeUpdated: EventEmitter<any> = new EventEmitter<any>();
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: InstrumentService,
        private _datePipe: DatePipe
    ) {
        super(_dialog);
    }

    protected getAllEntities() {
        this.entitiesListShouldBeUpdated.emit();
    }

    protected getEntities(): any[] {
        if (!this.entities) { return []; }
        return this.entities.map((e) => {
            e.updatedAtFormatted = this._datePipe.transform(new Date(e.updatedAt), 'yyyy-MM-dd');;
            return e;
        });
    }

    public ngOnInit() {
        super.ngOnInit();
    }

    protected getEntityService(): IEntityService {
        return this._entityService;
    }

    protected getAddComponent(): ComponentType<any> {
        return InstrumentAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return InstrumentEditComponent;
    }
}
