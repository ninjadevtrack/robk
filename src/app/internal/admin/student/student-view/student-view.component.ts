import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { StudentModel } from '../../../../core/student/model/student.model';
import { StudentService  } from '../../../../core/student/student.service';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

    id: string;
    student: StudentModel;

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

    getClientName() {
        return `${this.student.client.user.lastName} ${this.student.client.user.firstName} (${this.student.client.user.appeal})`;
    }

    getLinkToClient() {
        return `/i/admin/clients/${this.student.client._id}`;
    }

}
