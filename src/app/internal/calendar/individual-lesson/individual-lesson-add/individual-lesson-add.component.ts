import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientModel } from '../../../../core/client/model/client.model';
import { ClientService } from '../../../../core/client/client.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppealService } from '../../../../core/appeal/appeal.service';
import {UserModel} from '../../../../core/user/model/user.model';

@Component({
    selector: 'individual-lesson-add',
    templateUrl: './individual-lesson-add.component.html'
})
export class IndividualLessonAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    appeals: string[];

    constructor(
        private _clientService: ClientService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<IndividualLessonAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        this.form = this._formBuilder.group({
            student: [this.data.students[0]._id, [Validators.required]],
            teacher: [this.data.teachers[0]._id, [Validators.required]],
            start: [
                {
                    hour: this.data.date.getHours(),
                    minute: this.data.date.getMinutes()
                }, [Validators.required]]
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

        const clientModel = new ClientModel();
        clientModel.notes = this.form.controls['notes'].value;
        clientModel.user = userModel;

        return clientModel;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._clientService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }
}
