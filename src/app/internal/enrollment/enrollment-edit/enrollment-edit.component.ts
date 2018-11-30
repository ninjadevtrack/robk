import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { EnrollmentService } from "../../../core/enrollment/enrollment.service";
import { IEnrollment, EnrollmentModel} from "../../../core/enrollment/model/enrollment.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";
import { ServiceService } from '../../../core/service/service.service';
import { IService  } from '../../../core/service/model/service.model';
import { AppealService } from '../../../core/appeal/appeal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'enrollment-edit',
    templateUrl: './enrollment-edit.component.html',
    styleUrls: ['./enrollment-edit.component.scss']
})
export class EnrollmentEditComponent implements OnInit {

    id: string;
    form: FormGroup;
    serverErrorMessage: string;
    services: IService[];
    appeals: string[];
    enrollment: EnrollmentModel;

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IEnrollment> = new EventEmitter<IEnrollment>();

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _enrollmentService: EnrollmentService,
        private _serviceService: ServiceService,
        private _appealService: AppealService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            appeal: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            phone: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            services: ['', [Validators.required, Validators.maxLength(300)]]
        });

        this._appealService.getAll().subscribe((appeals: string[]) => {
            this.appeals = appeals;
        });

        this._serviceService.getAllActive().subscribe((services: IService[]) => {
            this.services = services;
        });

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._enrollmentService.get(this.id).subscribe((enrollment: EnrollmentModel) => {
                this.enrollment = enrollment;
                this.setFormValues(enrollment);
            });
        });
    }

    setFormValues(entity: IEnrollment) {
        this.form.controls['firstName'].setValue(entity.firstName);
        this.form.controls['lastName'].setValue(entity.lastName);
        this.form.controls['appeal'].setValue(entity.appeal);
        this.form.controls['phone'].setValue(entity.phone);
        this.form.controls['email'].setValue(entity.email);
        this.form.controls['services'].setValue(entity.services.map(s => s._id));
    }

    buildModelFromForm() {
        const model = new EnrollmentModel();
        model.firstName = this.form.controls['firstName'].value;
        model.lastName = this.form.controls['lastName'].value;
        model.appeal = this.form.controls['appeal'].value;
        model.phone = this.form.controls['phone'].value;
        model.email = this.form.controls['email'].value;
        model.services = this.form.controls['services'].value;
        return model;
    }

    save() {
        this._enrollmentService.update(this.id, this.buildModelFromForm()).subscribe((enrollment: IEnrollment) => {
            this.updated.emit(enrollment);
            this._router.navigateByUrl(`/i/enrollments/${this.id}`);
        });
    }

    cancel() {
        this.canceled.emit();
        this._router.navigateByUrl(`/i/enrollments/${this.id}`);
    }

    updateModel() {
        this.enrollment = this.buildModelFromForm();
    }

    firstNameChanged(event) {
        console.log(event);
    }

    lastNameChanged(event) {
        console.log(event);
    }

    appealChanged(event) {
        console.log(event);
    }

}
