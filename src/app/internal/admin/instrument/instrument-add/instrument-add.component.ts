import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstrumentModel } from '../../../../core/instrument/model/instrument.model';
import { ServerErrorModel } from '../../../../core/common/models/server-error.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";

@Component({
    selector: 'instrument-add',
    templateUrl: './instrument-add.component.html'
})
export class InstrumentAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;

    constructor(
        private _instrumentService: InstrumentService,
        public dialogRef: MatDialogRef<InstrumentAddComponent>,
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
        const model = new InstrumentModel();
        model.name = this.form.controls['name'].value;
        model.description = this.form.controls['description'].value;
        return model;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._instrumentService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: ServerErrorModel) => {
            this.serverErrorMessage = serverError.message;
        });
    }
}
