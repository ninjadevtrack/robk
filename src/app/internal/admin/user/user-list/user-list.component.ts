import {
    Component,
    OnInit
} from '@angular/core';
import { UserService } from '../../../../core/user/user.service';
import { EntityListComponentResolver } from "../../../core/entity/entity-list/entity-list.component.resolver";
import { EEntityEventType } from "../../../core/entity/entity-event-type.enum";
import {ComponentType} from '@angular/cdk/typings/portal';
import {MatDialog} from "@angular/material";
import {IEntityService} from "../../../../core/entity-service.model";
import {UserAddComponent} from "../user-add/user-add.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {UserModel} from "../../../../core/user/model/user.model";

@Component({
    selector: 'user-list',
    styleUrls: [ './user-list.component.scss' ],
    templateUrl: './user-list.component.html'
})
export class UserListComponent extends EntityListComponentResolver implements OnInit {

    entities: UserModel[];
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE ];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: UserService,
    ) {
        super(_dialog);
    }

    protected getAllEntities() {
        this._entityService.getAll().subscribe((entities: UserModel[]) => {
            this.entities = entities;
        });
    }

    protected getEntities(): any[] {

        if (!this.entities) { return []; }

        return this.entities.map((e) => {
            // @ts-ignore
            e.name = this.entityLabel(e);
            return e;
        });
    }

    public getTheEntities(): any[] {
        return this.getEntities();
    }

    public ngOnInit() {
        super.ngOnInit();
    }

    protected getEntityService(): IEntityService {
        return this._entityService;
    }

    protected getAddComponent(): ComponentType<any> {
        return UserAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return UserEditComponent;
    }

    protected entityLabel(entity: UserModel) {
        return `${entity.firstName} ${entity.lastName}`;
    }
}
