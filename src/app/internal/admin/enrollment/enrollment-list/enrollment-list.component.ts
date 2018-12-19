import {
    Component,
    OnInit,
    HostListener, Input, Output, EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { EnrollmentService } from "../../../../core/enrollment/enrollment.service";
import { EnrollmentAddComponent } from "../enrollment-add/enrollment-add.component";
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {DatePipe} from '@angular/common';
import {IEntityService} from '../../../../core/entity-service.model';
import {ComponentType} from '@angular/cdk/typings/portal';
import {EntityListComponentResolver} from '../../../../core/common/entity/entity-list/entity-list.component.resolver';
import {EnrollmentEditComponent} from '../enrollment-edit/enrollment-edit.component';
import {IEnrollment} from '../../../../core/enrollment/model/enrollment.model';

@Component({
    selector: 'enrollment-list',
    styleUrls: [ './enrollment-list.component.css' ],
    templateUrl: './enrollment-list.component.html'
})
export class EnrollmentListComponent extends EntityListComponentResolver implements OnInit {

    @Input() entities: any[];
    @Output() entitiesListShouldBeUpdated: EventEmitter<any> = new EventEmitter<any>();
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        protected _dialog: MatDialog,
        private _entityService: EnrollmentService,
        private _datePipe: DatePipe
    ) {
        super(_dialog);
    }

    protected getAllEntities() {
        this.entitiesListShouldBeUpdated.emit();
    }

    protected getEntities(): any[] {

        if (!this.entities) { return []; }

        return this.entities.map((e: any) => {
            e.name = `${e.lastName} ${e.firstName} (${e.appeal})`;
            e.servicesShortened = this.getServicesString(e);
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
        return EnrollmentAddComponent;
    }

    protected getEditComponent(): ComponentType<any> {
        return EnrollmentEditComponent;
    }

    private getServicesString(enrollment: IEnrollment) {
        const shortener = 20;
        const delimeter = '..., ';
        const shortenedString = enrollment.services.reduce((acc, service) =>  acc + service.name.substr(0, shortener) + delimeter, '');
        return shortenedString.substr(0, shortenedString.length - delimeter.length);
    }
}
