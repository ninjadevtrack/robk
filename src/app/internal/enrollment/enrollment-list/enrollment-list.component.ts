import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import {IEnrollment, EnrollmentModel} from "../../../core/enrollment/model/enrollment.model";
import { EnrollmentService } from "../../../core/enrollment/enrollment.service";
import { EnrollmentAddComponent } from "../enrollment-add/enrollment-add.component";

@Component({
    selector: 'enrollment-list',
    styleUrls: [ './enrollment-list.component.css' ],
    templateUrl: './enrollment-list.component.html'
})
export class EnrollmentListComponent implements OnInit {
    public activeEnrollments: IEnrollment[] = [];
    public archiveEnrollments: IEnrollment[] = [];
    addEnrollmentDialogOpened: boolean;

    constructor(
        private _enrollmentService: EnrollmentService,
        private _dialog: MatDialog
    ) {
        this.addEnrollmentDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEnrollments();
    }

    public getAllEnrollments() {
        // Get active users
        this.getActiveEnrollments();
        // Get archived users
        this.getArchivedEnrollments();
    }

    private getArchivedEnrollments() {
        this._enrollmentService.getAllArchived().subscribe((enrollments: EnrollmentModel[]) => {
            this.archiveEnrollments = enrollments;
        });
    }

    private getActiveEnrollments() {
        this._enrollmentService.getAllActive().subscribe((enrollments: EnrollmentModel[]) => {
            this.activeEnrollments = enrollments;
        });
    }

    addMediaPlan() {
        if(!this.addEnrollmentDialogOpened) {
            let dialogRef = this._dialog.open(EnrollmentAddComponent, {});
            this.addEnrollmentDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if(result) {
                    this.getActiveEnrollments();
                }
                this.addEnrollmentDialogOpened = false;
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