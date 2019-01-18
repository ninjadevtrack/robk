import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../../../core/teacher/teacher.service';
import {TeacherModel} from '../../../core/teacher/model/teacher.model';
import {IndividualLessonService} from '../../../core/individual-lesson/individual-lesson.service';
import {IIndividualLesson} from '../../../core/individual-lesson/model/individual-lesson.model';
import {StudentService} from '../../../core/student/student.service';
import {StudentModel} from '../../../core/student/model/student.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CalendarColoringModes} from '../../core/calendar/utils/calendar-coloring-modes.enum';
import {IndividualLessonAddEditComponent} from '../../core/calendar/individual-lesson/individual-lesson-add-edit/individual-lesson-add-edit.component';
import {DialogMode} from '../../../core/common/dialog-mode.enum';
import {MatDialog} from '@angular/material';
import {AuthStorageService} from '../../../core/common/auth-storage.service';
import {Consts} from '../../../core/common/config.service';


@Component({
  selector: 'app-teacher-calendar',
  templateUrl: './teacher-calendar.component.html',
  styleUrls: ['./teacher-calendar.component.scss']
})
export class TeacherCalendarComponent implements OnInit {

    filtersForm: FormGroup;
    id: string;
    teacher: TeacherModel;
    students: StudentModel[];
    individualLessons: IIndividualLesson[];
    addEditEntityDialogOpened = false;
    calendarColoringMode: CalendarColoringModes = CalendarColoringModes.BY_TEACHER;

    constructor(
      private _teacherService: TeacherService,
      private _studentService: StudentService,
      private _individualLessonsService: IndividualLessonService,
      private _formBuilder: FormBuilder,
      private _dialog: MatDialog,
      private _session: AuthStorageService,
    ) { }

    ngOnInit() {

      this.filtersForm = this._formBuilder.group({
          students: [[], []]
      });

      const userProfile = JSON.parse(this._session.getItem(Consts.USER_PROFILE));

      this.id = userProfile.teacher._id;
      this.teacher = userProfile.teacher;

      this._studentService.getAllActive().subscribe((students: StudentModel[]) => {
          this.students = students;
          this.getIndividualLessons([this.id], []);
      });

    }

    getIndividualLessons(teacherIds, studentIds) {
      this._individualLessonsService.search(teacherIds, studentIds).subscribe((individualLessons) => {
          this.individualLessons = individualLessons;
      });
    }

    getIndividualLessonsBySelectedFilersValues() {
      this.getIndividualLessons([this.id], this.filtersForm.controls['students'].value);
    }

    addEditIndividualLesson(data) {
        if (!this.addEditEntityDialogOpened) {
            const dialogRef = this._dialog.open(IndividualLessonAddEditComponent, {
                data: data
            });
            this.addEditEntityDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getIndividualLessonsBySelectedFilersValues();
                }
                this.addEditEntityDialogOpened = false;
            });
        }
    }

    addIndividualLesson(event) {
        const data = {
            mode: DialogMode.ADD,
            date: event.date,
            students: this.students,
            teachers: [this.teacher]
        };

        this.addEditIndividualLesson(data);
    }

    editIndividualLesson(il: IIndividualLesson) {
        const data = {
            mode: DialogMode.EDIT,
            il: il,
            students: this.students,
            teachers: [this.teacher]
        };

        this.addEditIndividualLesson(data);
    }

}
