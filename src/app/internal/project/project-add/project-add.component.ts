import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectModel } from "../../../core/project/model/project.model";
import { ServerErrorModel } from "../../../core/common";
import { ProjectService } from "../../../core/project/project.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";

@Component({
    selector: 'media-plan-add',
    templateUrl: './project-add.component.html'
})
export class ProjectAddComponent implements OnInit {

    mpForm: FormGroup;
    serverErrorMessage: string;

    constructor(
        private _projectService: ProjectService,
        public dialogRef: MatDialogRef<ProjectAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.mpForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            description: ['', [Validators.maxLength(120)]]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    buildModelFromForm(){
        let model = new ProjectModel();
        model.name = this.mpForm.controls['name'].value;
        model.description = this.mpForm.controls['description'].value;
        return model;
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._projectService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: ServerErrorModel) => {
            this.serverErrorMessage = serverError.message;
        });
    }
}