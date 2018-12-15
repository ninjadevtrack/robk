import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {InstrumentService} from '../../../../core/instrument/instrument.service';
import {InstrumentAddComponent} from '../instrument-add/instrument-add.component';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {InstrumentEditComponent} from '../instrument-edit/instrument-edit.component';
import {EntityListResolver} from '../../../../core/common/entity/entity-list/entity-list.resolver';
import {ComponentType} from '@angular/cdk/typings/portal';
import {IEntityService} from '../../../../core/entity-service.model';

@Component({
    selector: 'instrument-list',
    styleUrls: [ './instrument-list.component.css' ],
    templateUrl: './instrument-list.component.html'
})
export class InstrumentListComponent extends EntityListResolver implements OnInit {

    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        protected _entityService: InstrumentService
    ) {
        super(_dialog);
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
