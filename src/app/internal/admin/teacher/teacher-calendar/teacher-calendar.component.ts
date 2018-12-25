import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../../../../core/teacher/teacher.service';
import {TeacherModel} from '../../../../core/teacher/model/teacher.model';
import {IndividualLessonService} from '../../../../core/individual-lesson/individual-lesson.service';
import {IIndividualLesson} from '../../../../core/individual-lesson/model/individual-lesson.model';

@Component({
  selector: 'app-teacher-calendar',
  templateUrl: './teacher-calendar.component.html',
  styleUrls: ['./teacher-calendar.component.scss']
})
export class TeacherCalendarComponent implements OnInit {

  id: string;
  teacher: TeacherModel;
  individualLessons: IIndividualLesson[];

  constructor(
      private _router: Router,
      private _route: ActivatedRoute,
      private _teacherService: TeacherService,
      private _individualLessonsService: IndividualLessonService
  ) { }

  ngOnInit() {
      this._route.params.subscribe((params) => {
          this.id = params.id;

          this._teacherService.get(this.id).subscribe((teacher: TeacherModel) => {
              this.teacher = teacher;
          });

          this._individualLessonsService.search([this.id], []).subscribe((individualLessons) => {
            this.individualLessons = individualLessons;
          });
      });
  }

}
