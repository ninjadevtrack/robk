import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientModel } from '../../../../core/client/model/client.model';
import { ClientService } from '../../../../core/client/client.service';
import { ServerErrorModel } from "../../../../core/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { AppealService } from '../../../../core/appeal/appeal.service';
import {UserModel} from '../../../../core/user/model/user.model';

@Component({
    selector: 'client-add',
    templateUrl: './client-add.component.html'
})
export class ClientAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    appeals: string[];

    constructor(
        private _clientService: ClientService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<ClientAddComponent>,
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
