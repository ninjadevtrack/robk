import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceModel } from "../../../../core/service/model/service.model";
import { ServerErrorModel } from "../../../../core/common";
import { ServiceService } from "../../../../core/service/service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";

@Component({
    selector: 'service-add',
    templateUrl: './service-add.component.html'
})
export class ServiceAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;

    constructor(
        private _serviceService: ServiceService,
        public dialogRef: MatDialogRef<ServiceAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60)]],
            description: ['', [Validators.maxLength(260)]]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    buildModelFromForm() {
        const model = new ServiceModel();
        model.name = this.form.controls['name'].value;
        model.description = this.form.controls['description'].value;
        return model;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._serviceService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: ServerErrorModel) => {
            this.serverErrorMessage = serverError.message;
        });
    }
}