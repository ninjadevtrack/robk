import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TeacherModel } from '../../../../core/teacher/model/teacher.model';
import { TeacherService } from '../../../../core/teacher/teacher.service';

@Component({
  selector: 'teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent implements OnInit {

    id: string;
    teacher: TeacherModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _teacherService: TeacherService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._teacherService.get(this.id).subscribe((teacher: TeacherModel) => {
                this.teacher = teacher;
            });
        });
    }

}
