import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClientModel } from '../../../../core/client/model/client.model';
import { StudentModel } from '../../../../core/student/model/student.model';
import { StudentService  } from '../../../../core/student/student.service';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

    id: string;
    student: ClientModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _studentService: StudentService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._studentService.get(this.id).subscribe((student: StudentModel) => {
                this.student = student;
            });
        });
    }

}
