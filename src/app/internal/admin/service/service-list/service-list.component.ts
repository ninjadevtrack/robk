import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ServiceService } from "../../../../core/service/service.service";
import { ServiceAddComponent } from "../service-add/service-add.component";
import { EntityListComponentResolver } from '../../../../core/common/entity/entity-list/entity-list.component.resolver';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {DatePipe} from '@angular/common';
import {IEntityService} from '../../../../core/entity-service.model';
import {ComponentType} from '@angular/cdk/typings/portal';
import {ServiceEditComponent} from '../service-edit/service-edit.component';

@Component({
    selector: 'service-list',
    styleUrls: [ './service-list.component.css' ],
    templateUrl: './service-list.component.html'
})
export class ServiceListComponent extends EntityListComponentResolver implements OnInit {
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: ServiceService,
        private _datePipe: DatePipe
    ) {
        super(_dialog);
    }

    protected getEntities(): any[] {
        return super.getEntities().map((e) => {
            e.updatedAtFormatted = this._datePipe.transform(new Date(e.updatedAt), 'yyyy-MM-dd');
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
        return ServiceAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return ServiceEditComponent;
    }
}
