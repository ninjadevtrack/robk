import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { ServiceService } from "../../../../core/service/service.service";
import { IService, ServiceModel} from "../../../../core/service/model/service.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'service-edit',
    templateUrl: './service-edit.component.html',
    styleUrls: ['./service-edit.component.scss']
})
export class ServiceEditComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IService> = new EventEmitter<IService>();

    constructor(
        private _serviceService: ServiceService,
        private _formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<ServiceEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60)]],
            description: ['', [Validators.maxLength(260)]]
        });

        this._serviceService.get(this.data.id).subscribe((service: IService) => {
            this.setFormValues(service);
        });
    }

    setFormValues(entity: IService) {
        this.form.controls['name'].setValue(entity.name);
        this.form.controls['description'].setValue(entity.description);
    }

    buildModelFromForm() {
        const model = new ServiceModel();
        model.name = this.form.controls['name'].value;
        model.description = this.form.controls['description'].value;
        return model;
    }

    save() {
        this._serviceService.update(this.data.id, this.buildModelFromForm()).subscribe((service: IService) => {
            this.updated.emit(service);
            this.dialogRef.close(true);
        });
    }

    cancel() {
        this.canceled.emit();
        this.dialogRef.close();
    }

}
