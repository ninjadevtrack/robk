import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import {IEnrollment, EnrollmentModel} from "../../../../core/enrollment/model/enrollment.model";
import { EnrollmentService } from "../../../../core/enrollment/enrollment.service";
import { EnrollmentAddComponent } from "../enrollment-add/enrollment-add.component";
import { SearchPipe } from '../../../common/search.pipe';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'enrollment-list',
    styleUrls: [ './enrollment-list.component.css' ],
    templateUrl: './enrollment-list.component.html'
})
export class EnrollmentListComponent implements OnInit {

    form: FormGroup;
    public activeEntities: IEnrollment[] = [];
    public archivedEntities: IEnrollment[] = [];
    addEntityDialogOpened: boolean;
    searchPipe: SearchPipe = new SearchPipe();
    searchFields: string = 'firstName,lastName,email';

    constructor(
        private _entityService: EnrollmentService,
        private _formBuilder: FormBuilder,
        private _dialog: MatDialog
    ) {
        this.addEntityDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEntities();

        this.form = this._formBuilder.group({
            search: ['', []]
        });
    }

    public getAllEntities() {
        this.getActiveEntities();
        this.getArchivedEntities();
    }

    private getArchivedEntities() {
        this._entityService.getAllArchived().subscribe((enrollments: EnrollmentModel[]) => {
            this.archivedEntities = enrollments;
        });
    }

    private getActiveEntities() {
        this._entityService.getAllActive().subscribe((enrollments: EnrollmentModel[]) => {
            this.activeEntities = enrollments;
        });
    }

    public getFilteredActiveEntities() {
        return this.searchPipe.transform(this.activeEntities, this.searchFields, this.form.controls['search'].value);
    }

    public getFilteredArchivedEntities() {
        return this.searchPipe.transform(this.archivedEntities, this.searchFields, this.form.controls['search'].value);
    }

    addEntity() {
        if (!this.addEntityDialogOpened) {
            const dialogRef = this._dialog.open(EnrollmentAddComponent, {});
            this.addEntityDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getActiveEntities();
                }
                this.addEntityDialogOpened = false;
            });
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (event.code === "KeyN" && event.altKey) {
            this.addEntity();
        }
    }
}
