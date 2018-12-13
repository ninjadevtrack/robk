import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { TeacherModel } from '../../../../core/teacher/model/teacher.model';
import { TeacherService } from '../../../../core/teacher/teacher.service';
import { saveAs } from 'file-saver/FileSaver';
import { EntityDeleteComponent } from '../../../entity-delete/entity-delete.component';

@Component({
    selector: 'teacher-menu',
    templateUrl: './teacher-menu.component.html',
    styleUrls: ['./teacher-menu.component.css']
})
export class TeacherMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: TeacherModel;
    @Output() onTeacherEvent = new EventEmitter<string>();
    editTeacherDialogOpened: boolean = false;


    constructor(
        private _teacherService: TeacherService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._teacherService.archive(this.model._id).subscribe(() => {
            this.onTeacherEvent.emit(this.model._id);
        });
    }

    activate() {
        this._teacherService.activate(this.model._id).subscribe(() => {
            this.onTeacherEvent.emit(this.model._id);
        });
    }

    delete() {

        const dialogRef = this._dialog.open(EntityDeleteComponent, {
            data: {
                id: this.model._id,
                name: this.model.user.firstName + this.model.user.lastName
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.deleted) {
                this._teacherService.delete(this.model._id).subscribe(() => {
                    this.onTeacherEvent.emit(this.model._id);
                });
            }

        });
    }

}
