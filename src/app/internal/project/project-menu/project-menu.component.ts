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
// import { DeleteDialogComponent } from "../../delete-dialog/delete-dialog.component";
import { saveAs } from 'file-saver/FileSaver';

@Component({
    selector: 'media-plan-menu',
    templateUrl: './project-menu.component.html',
    styleUrls: ['./project-menu.component.css']
})
export class ProjectMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: ProjectModel;
    @Output() onMediaPlanEvent = new EventEmitter<string>();

    constructor(
        private _projectService: ProjectService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._projectService.archive(this.model._id).subscribe((result: any) => {
            this.onMediaPlanEvent.emit(this.model._id);
        });
    }

    activate() {
        this._projectService.activate(this.model._id).subscribe((result: any) => {
            this.onMediaPlanEvent.emit(this.model._id);
        });
    }

    update() {
        console.log('Updating...');
    }

    delete() {

        // let dialogRef = this._dialog.open(DeleteDialogComponent, {
        //     data: {
        //         id: this.model._id,
        //         name: this.model.name
        //     }
        // });
        //
        // dialogRef.afterClosed().subscribe( (result) => {
        //
        //     if (result.deleted){
        //         this._mediaPlanService.delete(this.model._id).subscribe((result) => {
        //             this.onMediaPlanEvent.emit(this.model._id);
        //         });
        //     }
        //
        // });
    }

}
