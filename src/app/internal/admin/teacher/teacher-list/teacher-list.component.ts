import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ITeacher, TeacherModel } from '../../../../core/teacher/model/teacher.model';
import { TeacherService } from '../../../../core/teacher/teacher.service';
import { TeacherAddComponent } from "../teacher-add/teacher-add.component";
import { SearchPipe } from '../../../common/search.pipe';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'teacher-list',
    styleUrls: [ './teacher-list.component.css' ],
    templateUrl: './teacher-list.component.html'
})
export class TeacherListComponent implements OnInit {

    form: FormGroup;
    public activeEntitites: ITeacher[] = [];
    public archivedEntities: ITeacher[] = [];
    addTeacherDialogOpened: boolean;
    searchPipe: SearchPipe = new SearchPipe();
    searchFields: string = 'firstName,lastName,email';

    constructor(
        private _teacherService: TeacherService,
        private _formBuilder: FormBuilder,
        private _dialog: MatDialog
    ) {
        this.addTeacherDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEntities();

        this.form = this._formBuilder.group({
            search: ['', []]
        });
    }

    public getAllEntities() {
        // Get active users
        this.getActiveEntities();
        // Get archived users
        this.getArchivedEntitites();
    }

    private getArchivedEntitites() {
        this._teacherService.getAllArchived().subscribe((entities: TeacherModel[]) => {
            this.archivedEntities = entities;
        });
    }

    private getActiveEntities() {
        this._teacherService.getAllActive().subscribe((entities: TeacherModel[]) => {
            this.activeEntitites = entities;
        });
    }

    private filterTeachers(teachers: ITeacher[]): ITeacher[] {
        const users = teachers.map(c =>  c.user);
        const filteredUsersIds = this.searchPipe.transform(users, this.searchFields, this.form.controls['search'].value).map(u => u._id);
        return teachers.filter(c => filteredUsersIds.includes(c.user._id));
    }

    public getFilteredActiveEntities() {
        return this.filterTeachers(this.activeEntitites);
    }

    public getFilteredArchivedEntities() {
        return this.filterTeachers(this.archivedEntities);
    }

    addEntity() {
        if (!this.addTeacherDialogOpened) {
            const dialogRef = this._dialog.open(TeacherAddComponent, {});
            this.addTeacherDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getActiveEntities();
                }
                this.addTeacherDialogOpened = false;
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
