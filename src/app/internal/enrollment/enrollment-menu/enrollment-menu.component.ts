import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { EnrollmentModel } from "../../../core/enrollment/model/enrollment.model";
import { EnrollmentService } from "../../../core/enrollment/enrollment.service";
import { saveAs } from 'file-saver/FileSaver';
import { EnrollmentEditComponent } from "../enrollment-edit/enrollment-edit.component";
import { EntityDeleteComponent } from '../../entity-delete/entity-delete.component';

@Component({
    selector: 'enrollment-menu',
    templateUrl: './enrollment-menu.component.html',
    styleUrls: ['./enrollment-menu.component.css']
})
export class EnrollmentMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: EnrollmentModel;
    @Output() onEnrollmentEvent = new EventEmitter<string>();
    editEnrollmentDialogOpened: boolean = false;


    constructor(
        private _enrollmentService: EnrollmentService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._enrollmentService.archive(this.model._id).subscribe(() => {
            this.onEnrollmentEvent.emit(this.model._id);
        });
    }

    activate() {
        this._enrollmentService.activate(this.model._id).subscribe(() => {
            this.onEnrollmentEvent.emit(this.model._id);
        });
    }

    delete() {

        const dialogRef = this._dialog.open(EntityDeleteComponent, {
            data: {
                id: this.model._id,
                name: this.model.firstName + this.model.lastName
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.deleted){
                this._enrollmentService.delete(this.model._id).subscribe(() => {
                    this.onEnrollmentEvent.emit(this.model._id);
                });
            }

        });
    }

}
