import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { EnrollmentService } from "../../../core/enrollment/enrollment.service";
import { IEnrollment, EnrollmentModel} from "../../../core/enrollment/model/enrollment.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'enrollment-edit',
    templateUrl: './enrollment-edit.component.html',
    styleUrls: ['./enrollment-edit.component.scss']
})
export class EnrollmentEditComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IEnrollment> = new EventEmitter<IEnrollment>();

    constructor(
        private _enrollmentService: EnrollmentService,
        private _formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<EnrollmentEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
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

        this._enrollmentService.get(this.data.id).subscribe((enrollment: IEnrollment) => {
            this.setFormValues(enrollment);
        });
    }

    setFormValues(entity: IEnrollment) {
        this.form.controls['firstName'].setValue(entity.firstName);
        this.form.controls['lastName'].setValue(entity.lastName);
        this.form.controls['appeal'].setValue(entity.appeal);
        this.form.controls['phone'].setValue(entity.phone);
        this.form.controls['email'].setValue(entity.email);
        this.form.controls['services'].setValue(entity.services);
    }

    buildModelFromForm(){
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
        this._enrollmentService.update(this.data.id, this.buildModelFromForm()).subscribe((enrollment: IEnrollment) => {
            this.updated.emit(enrollment);
            this.dialogRef.close(true);
        });
    }

    cancel() {
        this.canceled.emit();
        this.dialogRef.close();
    }

}
