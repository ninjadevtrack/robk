import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { IInstrument, InstrumentModel} from '../../../../core/instrument/model/instrument.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'instrument-edit',
    templateUrl: './instrument-edit.component.html',
    styleUrls: ['./instrument-edit.component.scss']
})
export class InstrumentEditComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IInstrument> = new EventEmitter<IInstrument>();

    constructor(
        private _instrumentService: InstrumentService,
        private _formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<InstrumentEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60)]],
            description: ['', [Validators.maxLength(260)]]
        });

        this._instrumentService.get(this.data.id).subscribe((instrument: IInstrument) => {
            this.setFormValues(instrument);
        });
    }

    setFormValues(entity: IInstrument) {
        this.form.controls['name'].setValue(entity.name);
        this.form.controls['description'].setValue(entity.description);
    }

    buildModelFromForm() {
        const model = new InstrumentModel();
        model.name = this.form.controls['name'].value;
        model.description = this.form.controls['description'].value;
        return model;
    }

    save() {
        this._instrumentService.update(this.data.id, this.buildModelFromForm()).subscribe((instrument: IInstrument) => {
            this.updated.emit(instrument);
            this.dialogRef.close(true);
        });
    }

    cancel() {
        this.canceled.emit();
        this.dialogRef.close();
    }

}
