import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MediaPlanModel } from "../../../core/media-plan/model/media-plan.model";
import { MediaPlanService } from "../../../core/media-plan/media-plan.service";
// import { DeleteDialogComponent } from "../../delete-dialog/delete-dialog.component";
import { saveAs } from 'file-saver/FileSaver';

@Component({
    selector: 'media-plan-menu',
    templateUrl: './media-plan-menu.component.html',
    styleUrls: ['./media-plan-menu.component.css']
})
export class MediaPlanMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: MediaPlanModel;
    @Output() onMediaPlanEvent = new EventEmitter<string>();

    constructor(
        private _mediaPlanService: MediaPlanService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    duplicate() {
        this._mediaPlanService.duplicate(this.model._id).subscribe((result: any) => {
            this.onMediaPlanEvent.emit(this.model._id);
        });
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
