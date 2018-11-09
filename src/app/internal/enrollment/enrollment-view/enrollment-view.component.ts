import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EnrollmentService } from "../../../core/enrollment/enrollment.service";
import { IEnrollment, EnrollmentModel } from "../../../core/enrollment/model/enrollment.model";

@Component({
  selector: 'app-enrollment-view',
  templateUrl: './enrollment-view.component.html',
  styleUrls: ['./enrollment-view.component.scss']
})
export class EnrollmentViewComponent implements OnInit {

    id: string;
    enrollment: EnrollmentModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _enrollmentService: EnrollmentService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._enrollmentService.get(this.id).subscribe((enrollment: EnrollmentModel) => {
                this.enrollment = enrollment;
            });
        });
    }

}
