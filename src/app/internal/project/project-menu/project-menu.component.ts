import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectModel } from "../../../core/project/model/project.model";
import { ProjectService } from "../../../core/project/project.service";
import { DeleteDialogComponent } from "../../delete-dialog/delete-dialog.component";
import { saveAs } from 'file-saver/FileSaver';
import {ProjectEditComponent} from "../project-edit/project-edit.component";

@Component({
    selector: 'media-plan-menu',
    templateUrl: './project-menu.component.html',
    styleUrls: ['./project-menu.component.css']
})
export class ProjectMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: ProjectModel;
    @Output() onProjectEvent = new EventEmitter<string>();
    editProjectDialogOpened: boolean = false;


    constructor(
        private _projectService: ProjectService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._projectService.archive(this.model._id).subscribe((result: any) => {
            this.onProjectEvent.emit(this.model._id);
        });
    }

    activate() {
        this._projectService.activate(this.model._id).subscribe((result: any) => {
            this.onProjectEvent.emit(this.model._id);
        });
    }

    update() {

        if (!this.editProjectDialogOpened) {

            const dialogRef = this._dialog.open(ProjectEditComponent, {
                data: {
                    id: this.model._id
                }
            });

            this.editProjectDialogOpened = true;

            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.onProjectEvent.emit(this.model._id);
                }

                this.editProjectDialogOpened = false;
            });
        }
    }

    delete() {

        const dialogRef = this._dialog.open(DeleteDialogComponent, {
            data: {
                id: this.model._id,
                name: this.model.name
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.deleted){
                this._projectService.delete(this.model._id).subscribe((result) => {
                    this.onProjectEvent.emit(this.model._id);
                });
            }

        });
    }

}
