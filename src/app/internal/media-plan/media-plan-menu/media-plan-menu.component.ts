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
    templateUrl: './media-plan-menu.component.html',
    styleUrls: ['./media-plan-menu.component.css']
})
export class MediaPlanMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: ProjectModel;
    @Output() onMediaPlanEvent = new EventEmitter<string>();

    constructor(
        private _mediaPlanService: ProjectService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._mediaPlanService.archive(this.model._id).subscribe((result: any) => {
            this.onMediaPlanEvent.emit(this.model._id);
        });
    }

    activate() {
        this._mediaPlanService.activate(this.model._id).subscribe((result: any) => {
            this.onMediaPlanEvent.emit(this.model._id);
        });
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
