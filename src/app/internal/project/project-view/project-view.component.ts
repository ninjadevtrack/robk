import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../../../core/project/project.service";
import { IProject, ProjectModel } from "../../../core/project/model/project.model";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

    id: string;
    project: ProjectModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _projectService: ProjectService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._projectService.get(this.id).subscribe((project: ProjectModel) => {
                this.project = project;
            })
        });
    }

}
