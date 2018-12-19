import {
    Component, EventEmitter, Input,
    OnInit, Output
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClientAddComponent } from "../client-add/client-add.component";
import {EntityListComponentResolver} from '../../../../core/common/entity/entity-list/entity-list.component.resolver';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {IEntityService} from '../../../../core/entity-service.model';
import {ComponentType} from '@angular/cdk/typings/portal';
import {ClientEditComponent} from '../client-edit/client-edit.component';
import {ClientService} from '../../../../core/client/client.service';

@Component({
    selector: 'client-list',
    styleUrls: [ './client-list.component.css' ],
    templateUrl: './client-list.component.html'
})
export class ClientListComponent extends EntityListComponentResolver implements OnInit {

    @Input() entities: any[];
    @Output() entitiesListShouldBeUpdated: EventEmitter<any> = new EventEmitter<any>();
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: ClientService
    ) {
        super(_dialog);
    }

    protected getAllEntities() {
        this.entitiesListShouldBeUpdated.emit();
    }

    protected getEntities(): any[] {

        if (!this.entities) { return []; }

        return this.entities.map((e) => {
            e.name = this.entityLabel(e);
            e.phone = e.user.phone;
            e.email = e.user.email;
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
        return ClientAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return ClientEditComponent;
    }

    protected entityLabel(entity: any) {
        return `${entity.user.lastName} ${entity.user.firstName} (${entity.user.appeal})`;
    }
}
