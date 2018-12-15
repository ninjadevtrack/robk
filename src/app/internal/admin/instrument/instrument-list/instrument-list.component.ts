import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {IInstrument, InstrumentModel} from '../../../../core/instrument/model/instrument.model';
import {InstrumentService} from '../../../../core/instrument/instrument.service';
import {InstrumentAddComponent} from '../instrument-add/instrument-add.component';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {InstrumentEditComponent} from '../instrument-edit/instrument-edit.component';
import {EntityListContainerComponent} from '../../../../core/common/entity/entity-list-container/entity-list-container.component';
import {ComponentType} from '@angular/cdk/typings/portal';
import {IEntityService} from '../../../../core/entity-service.model';

@Component({
    selector: '',
    styleUrls: [ './instrument-list.component.css' ],
    templateUrl: './instrument-list.component.html'
})
export class InstrumentListComponent extends EntityListContainerComponent implements OnInit {

    public entities: IInstrument[] = [];
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
