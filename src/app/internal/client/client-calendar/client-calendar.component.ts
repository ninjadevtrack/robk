import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IndividualLessonService} from '../../../core/individual-lesson/individual-lesson.service';
import {IIndividualLesson} from '../../../core/individual-lesson/model/individual-lesson.model';
import {StudentService} from '../../../core/student/student.service';
import {StudentModel} from '../../../core/student/model/student.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClientService} from '../../../core/client/client.service';
import {ClientModel} from '../../../core/client/model/client.model';
import {CalendarColoringModes} from '../../common/calendar/utils/calendar-coloring-modes.enum';
import {AuthStorageService} from '../../../core/common/auth-storage.service';
import {Consts} from '../../../core/common';

@Component({
  selector: 'app-client-calendar',
  templateUrl: './client-calendar.component.html',
  styleUrls: ['./client-calendar.component.scss']
})
export class ClientCalendarComponent implements OnInit {

  filtersForm: FormGroup;
  id: string;
  client: ClientModel;
  students: StudentModel[];
  individualLessons: IIndividualLesson[];
  calendarColoringMode: CalendarColoringModes = CalendarColoringModes.BY_STUDENT;

  constructor(
      private _router: Router,
      private _route: ActivatedRoute,
      private _clientService: ClientService,
      private _studentService: StudentService,
      private _individualLessonsService: IndividualLessonService,
      private _formBuilder: FormBuilder,
      private _session: AuthStorageService,
  ) { }

  ngOnInit() {

      this.filtersForm = this._formBuilder.group({
          students: ['', []]
      });

      const userProfile = JSON.parse(this._session.getItem(Consts.USER_PROFILE));

      this.id = userProfile.client._id;
      this.client = userProfile.client;

      this._clientService.getStudents(this.id).subscribe((students: StudentModel[]) => {
          this.students = students;
          this.filtersForm.controls['students'].setValue(this.students.map(s => s._id));
          this.getIndividualLessons([], this.filtersForm.controls['students'].value);
      });
  }

  getIndividualLessons(teacherIds, studentIds) {
      this._individualLessonsService.search(teacherIds, studentIds).subscribe((individualLessons) => {
          this.individualLessons = individualLessons;
      });
  }

  filterSelectionChanged() {
      this.getIndividualLessons([], this.filtersForm.controls['students'].value);
  }

}
