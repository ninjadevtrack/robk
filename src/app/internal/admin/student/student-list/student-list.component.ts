import {
    Component,
    OnInit,
    Output,
    Input, EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { StudentAddComponent } from "../student-add/student-add.component";
import {EntityListComponentResolver} from '../../../../core/common/entity/entity-list/entity-list.component.resolver';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {IEntityService} from '../../../../core/entity-service.model';
import {ComponentType} from '@angular/cdk/typings/portal';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {StudentService} from '../../../../core/student/student.service';

@Component({
    selector: 'student-list',
    styleUrls: [ './student-list.component.css' ],
    templateUrl: './student-list.component.html'
})
export class StudentListComponent extends EntityListComponentResolver implements OnInit {

    @Input() searchFieldEnabled: boolean = true;
    @Input() addEntityEnabled: boolean = true;
    @Input() entities: any[] = [];
    @Output() entitiesListShouldBeUpdated: EventEmitter<any> = new EventEmitter<any>();
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: StudentService
    ) {
        super(_dialog);
    }

    protected getAllEntities() {
        this.entitiesListShouldBeUpdated.emit();
    }

    protected getEntities(): any[] {

        if (!this.entities) { return []; }

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
        return StudentAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return StudentEditComponent;
    }
}
