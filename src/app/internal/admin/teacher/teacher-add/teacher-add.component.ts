import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TeacherModel } from '../../../../core/teacher/model/teacher.model';
import { TeacherService } from '../../../../core/teacher/teacher.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { AppealService } from '../../../../core/appeal/appeal.service';
import { UserModel } from '../../../../core/user/model/user.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';
import {IInstrument} from '../../../../core/instrument/model/instrument.model';

@Component({
    selector: 'teacher-add',
    templateUrl: './teacher-add.component.html'
})
export class TeacherAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    appeals: string[];
    instruments: IInstrument[];

    constructor(
        private _teacherService: TeacherService,
        private _instrumentsService: InstrumentService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<TeacherAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {

        this._instrumentsService.getAllActive().subscribe((instruments: IInstrument[]) => {
           this.instruments = instruments;


            this._appealService.getAll().subscribe((appeals: string[]) => {
                this.appeals = appeals;

                this.form = this._formBuilder.group({
                    firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                    lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                    appeal: [this.appeals[0], [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                    phone: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                    email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
                    notes: ['', [Validators.required, Validators.maxLength(3000), NotSpacesStringValidator()]],
                    experience: ['', [Validators.required, Validators.maxLength(3000), NotSpacesStringValidator()]],
                    instruments: [this.instruments[0], [Validators.required, Validators.maxLength(300)]]
                });
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

        const teacherModel = new TeacherModel();
        teacherModel.experience = this.form.controls['experience'].value;
        teacherModel.notes = this.form.controls['notes'].value;
        teacherModel.instruments = this.form.controls['instruments'].value;
        teacherModel.user = userModel;

        return teacherModel;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._teacherService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }
}
