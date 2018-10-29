import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from "../../../core/project/project.service";
import { IProject, ProjectModel} from "../../../core/project/model/project.model";
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
    @Output() updated: EventEmitter<IProject> = new EventEmitter<IProject>();

    constructor(
        private _mediaPlanService: ProjectService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.mpForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            description: ['', [Validators.maxLength(120)]]
        });

        this._mediaPlanService.get(this.mediaPlanId).subscribe((mp: IProject) => {
            this.setFormValues(mp);
        });
    }

    setFormValues(mp: IProject) {
        this.mpForm.controls['name'].setValue(mp.name);
        this.mpForm.controls['description'].setValue(mp.description);
    }

    buildModelFromForm(){
        let model = new ProjectModel();
        model.name = this.mpForm.controls['name'].value;
        model.description = this.mpForm.controls['description'].value;
        return model;
    }

    save() {
        this._mediaPlanService.update(this.mediaPlanId, this.buildModelFromForm()).subscribe((mediaPlan: IProject) => {
            this.updated.emit(mediaPlan);
        });
    }

    cancel() {
        this.canceled.emit();
    }

}
