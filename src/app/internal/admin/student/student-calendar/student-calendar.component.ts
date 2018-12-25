import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../../../../core/teacher/teacher.service';
import {TeacherModel} from '../../../../core/teacher/model/teacher.model';
import {IndividualLessonService} from '../../../../core/individual-lesson/individual-lesson.service';
import {IIndividualLesson} from '../../../../core/individual-lesson/model/individual-lesson.model';
import {StudentService} from '../../../../core/student/student.service';
import {StudentModel} from '../../../../core/student/model/student.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.scss']
})
export class StudentCalendarComponent implements OnInit {

  filtersForm: FormGroup;
  id: string;
  student: StudentModel;
  teachers: TeacherModel[];
  individualLessons: IIndividualLesson[];

  constructor(
      private _router: Router,
      private _route: ActivatedRoute,
      private _teacherService: TeacherService,
      private _studentService: StudentService,
      private _individualLessonsService: IndividualLessonService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

      this.filtersForm = this._formBuilder.group({
          teachers: ['', []]
      });

      this._route.params.subscribe((params) => {
          this.id = params.id;

          this._studentService.get(this.id).subscribe((student: StudentModel) => {
              this.student = student;
          });

          this._teacherService.getAllActive().subscribe((teachers: TeacherModel[]) => {
              this.teachers = teachers;
              this.getIndividualLessons([], [this.id]);
          });
      });
  }

  getIndividualLessons(teacherIds, studentIds) {
      this._individualLessonsService.search(teacherIds, studentIds).subscribe((individualLessons) => {
          this.individualLessons = individualLessons;
      });
  }

  filterSelectionChanged() {
      this.getIndividualLessons(this.filtersForm.controls['teachers'].value, [this.id]);
  }

}
