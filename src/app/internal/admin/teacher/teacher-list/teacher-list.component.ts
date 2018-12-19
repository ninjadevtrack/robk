import {
    Component, Input,
    OnInit
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { TeacherService } from '../../../../core/teacher/teacher.service';
import { TeacherAddComponent } from "../teacher-add/teacher-add.component";
import {EntityListComponentResolver} from '../../../../core/common/entity/entity-list/entity-list.component.resolver';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {IEntityService} from '../../../../core/entity-service.model';
import {ComponentType} from '@angular/cdk/typings/portal';
import {TeacherEditComponent} from '../teacher-edit/teacher-edit.component';

@Component({
    selector: 'teacher-list',
    styleUrls: [ './teacher-list.component.css' ],
    templateUrl: './teacher-list.component.html'
})
export class TeacherListComponent extends EntityListComponentResolver implements OnInit {

    @Input() entities: any[] = [];
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: TeacherService
    ) {
        super(_dialog);
    }

    protected getEntities(): any[] {
        return this.entities.map((e) => {
            e.name = `${e.user.lastName} ${e.user.firstName} (${e.user.appeal})`;
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
        return TeacherAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return TeacherEditComponent;
    }
}
