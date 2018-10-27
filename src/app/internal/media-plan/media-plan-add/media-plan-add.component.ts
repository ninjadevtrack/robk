import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MediaPlanModel } from "../../../core/media-plan/model/media-plan.model";
import { ServerErrorModel } from "../../../core/common";
import { MediaPlanService } from "../../../core/media-plan/media-plan.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";

@Component({
    selector: 'media-plan-add',
    templateUrl: './media-plan-add.component.html'
})
export class MediaPlanAddComponent implements OnInit {

    mpForm: FormGroup;
    serverErrorMessage: string;

    constructor(
        private _mediaPlanService: MediaPlanService,
        public dialogRef: MatDialogRef<MediaPlanAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.mpForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            clientName: ['', [Validators.required, Validators.maxLength(40), NotSpacesStringValidator()]],
            description: ['', [Validators.maxLength(120)]]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    buildModelFromForm(){
        let model = new MediaPlanModel();
        model.name = this.mpForm.controls['name'].value;
        model.clientName = this.mpForm.controls['clientName'].value;
        model.description = this.mpForm.controls['description'].value;
        return model;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._mediaPlanService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: ServerErrorModel) => {
            this.serverErrorMessage = serverError.message;
        });
    }
}