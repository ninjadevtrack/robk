import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { IMediaPlan } from "../../../core/media-plan/model/media-plan.model";
import { MediaPlanService } from "../../../core/media-plan/media-plan.service";
import { MediaPlanAddComponent } from "../media-plan-add/media-plan-add.component";

@Component({
    selector: 'media-plan-list',
    styleUrls: [ './media-plan-list.component.css' ],
    templateUrl: './media-plan-list.component.html'
})
export class MediaPlanListComponent implements OnInit {
    public activeMediaPlans: IMediaPlan[] = [];
    public archiveMediaPlans: IMediaPlan[] = [];
    addMediaPlanDialogOpened: boolean;

    constructor(
        private _mediaPlanService: MediaPlanService,
        private _dialog: MatDialog
    ) {
        this.addMediaPlanDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllMediaPlans();
    }

    private getAllMediaPlans() {
        // Get active users
        this.getActiveMediaPlans();
        // Get archived users
        this.getArchivedMediaPlans();
    }

    private getArchivedMediaPlans() {
        this._mediaPlanService.getAllArchived().subscribe((mediasResult: any) => {
            this.archiveMediaPlans = mediasResult.docs;
        });
    }

    private getActiveMediaPlans() {
        this._mediaPlanService.getAllActive().subscribe((mediasResult: any) => {
            this.activeMediaPlans = mediasResult.docs;
        });
    }

    addMediaPlan() {
        if(!this.addMediaPlanDialogOpened) {
            let dialogRef = this._dialog.open(MediaPlanAddComponent, {});
            this.addMediaPlanDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if(result) {
                    this.getActiveMediaPlans();
                }
                this.addMediaPlanDialogOpened = false;
            });
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (event.code === "KeyN" && event.altKey) {
            this.addMediaPlan();
        }
    }
}