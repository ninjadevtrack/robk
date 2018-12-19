import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentModel } from '../../../../core/student/model/student.model';
import { StudentService } from '../../../../core/student/student.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { AppealService } from '../../../../core/appeal/appeal.service';
import { UserModel } from '../../../../core/user/model/user.model';

@Component({
    selector: 'student-add',
    templateUrl: './student-add.component.html'
})
export class StudentAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    appeals: string[];

    constructor(
        private _studentService: StudentService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<StudentAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {

        this._appealService.getAll().subscribe((appeals: string[]) => {
            this.appeals = appeals;

            this.form = this._formBuilder.group({
                firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                appeal: [this.appeals[0], [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                phone: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                notes: ['', [Validators.required, Validators.maxLength(3000), NotSpacesStringValidator()]]
            });
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    buildModelFromForm() {

        const userModel = new UserModel();
        userModel.firstName = this.form.controls['firstName'].value;
        userModel.lastName = this.form.controls['lastName'].value;
        userModel.appeal = this.form.controls['appeal'].value;
        userModel.phone = this.form.controls['phone'].value;
        userModel.email = this.form.controls['email'].value;

        const studentModel = new StudentModel();
        studentModel.notes = this.form.controls['notes'].value;
        studentModel.user = userModel;
        studentModel.client = this.data.clientId;

        return studentModel;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._studentService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }
}
