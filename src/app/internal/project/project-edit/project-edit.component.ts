import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { ProjectService } from "../../../core/project/project.service";
import { IProject, ProjectModel} from "../../../core/project/model/project.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../core/validators/not-spaces-string-validator";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'media-plan-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IProject> = new EventEmitter<IProject>();

    constructor(
        private _projectService: ProjectService,
        private _formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<ProjectEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            description: ['', [Validators.maxLength(120)]]
        });

        this._projectService.get(this.data.id).subscribe((project: IProject) => {
            this.setFormValues(project);
        });
    }

    setFormValues(mp: IProject) {
        this.form.controls['name'].setValue(mp.name);
        this.form.controls['description'].setValue(mp.description);
    }

    buildModelFromForm(){
        let model = new ProjectModel();
        model.name = this.form.controls['name'].value;
        model.description = this.form.controls['description'].value;
        return model;
    }

    save() {
        this._projectService.update(this.data.id, this.buildModelFromForm()).subscribe((project: IProject) => {
            this.updated.emit(project);
            this.dialogRef.close(true);
        });
    }

    cancel() {
        this.canceled.emit();
        this.dialogRef.close();
    }

}
