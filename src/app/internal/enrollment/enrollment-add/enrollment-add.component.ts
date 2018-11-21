import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EnrollmentModel } from "../../../core/enrollment/model/enrollment.model";
import { ServerErrorModel } from "../../../core/common";
import { EnrollmentService } from "../../../core/enrollment/enrollment.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";
import { IService } from '../../../core/service/model/service.model';
import { ServiceService } from '../../../core/service/service.service';
import { AppealService } from '../../../core/appeal/appeal.service';

@Component({
    selector: 'enrollment-add',
    templateUrl: './enrollment-add.component.html'
})
export class EnrollmentAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    services: IService[];
    appeals: string[];

    constructor(
        private _enrollmentService: EnrollmentService,
        private _serviceService: ServiceService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<EnrollmentAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            appeal: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            phone: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            services: ['', [Validators.required, Validators.maxLength(300)]]
        });

        this._serviceService.getAllActive().subscribe((services: IService[]) => {
            this.services = services;
        });

        this._appealService.getAll().subscribe((appeals: string[]) => {
            this.appeals = appeals;
            console.log(this.appeals);
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
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

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._enrollmentService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: ServerErrorModel) => {
            this.serverErrorMessage = serverError.message;
        });
    }
}