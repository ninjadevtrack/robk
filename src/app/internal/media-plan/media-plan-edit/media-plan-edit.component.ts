import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaPlanService } from "../../../core/media-plan/media-plan.service";
import { IMediaPlan, MediaPlanModel} from "../../../core/media-plan/model/media-plan.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";

@Component({
    selector: 'media-plan-edit',
    templateUrl: './media-plan-edit.component.html',
    styleUrls: ['./media-plan-edit.component.scss']
})
export class MediaPlanEditComponent implements OnInit {

    mpForm: FormGroup;
    serverErrorMessage: string;

    @Input() mediaPlanId: string;
    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IMediaPlan> = new EventEmitter<IMediaPlan>();

    constructor(
        private _mediaPlanService: MediaPlanService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.mpForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            clientName: ['', [Validators.required, Validators.maxLength(40), NotSpacesStringValidator()]],
            description: ['', [Validators.maxLength(120)]]
        });

        this._mediaPlanService.get(this.mediaPlanId).subscribe((mp: IMediaPlan) => {
            this.setFormValues(mp);
        });
    }

    setFormValues(mp: IMediaPlan) {
        this.mpForm.controls['name'].setValue(mp.name);
        this.mpForm.controls['clientName'].setValue(mp.clientName);
        this.mpForm.controls['description'].setValue(mp.description);
    }

    buildModelFromForm(){
        let model = new MediaPlanModel();
        model.name = this.mpForm.controls['name'].value;
        model.clientName = this.mpForm.controls['clientName'].value;
        model.description = this.mpForm.controls['description'].value;
        return model;
    }

    save() {
        this._mediaPlanService.update(this.mediaPlanId, this.buildModelFromForm()).subscribe((mediaPlan: IMediaPlan) => {
            this.updated.emit(mediaPlan);
        });
    }

    cancel() {
        this.canceled.emit();
    }

}
