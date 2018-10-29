import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import {IProject, ProjectModel} from "../../../core/project/model/project.model";
import { ProjectService } from "../../../core/project/project.service";
import { ProjectAddComponent } from "../project-add/project-add.component";

@Component({
    selector: 'project-list',
    styleUrls: [ './project-list.component.css' ],
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    public activeProjects: IProject[] = [];
    public archiveProjects: IProject[] = [];
    addMediaPlanDialogOpened: boolean;

    constructor(
        private _projectService: ProjectService,
        private _dialog: MatDialog
    ) {
        this.addMediaPlanDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllProjects();
    }

    private getAllProjects() {
        // Get active users
        this.getActiveProjects();
        // Get archived users
        this.getArchivedProjects();
    }

    private getArchivedProjects() {
        this._projectService.getAllArchived().subscribe((projects: ProjectModel[]) => {
            this.archiveProjects = projects;
        });
    }

    private getActiveProjects() {
        this._projectService.getAllActive().subscribe((projects: ProjectModel[]) => {
            this.activeProjects = projects;
        });
    }

    addMediaPlan() {
        if(!this.addMediaPlanDialogOpened) {
            let dialogRef = this._dialog.open(ProjectAddComponent, {});
            this.addMediaPlanDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if(result) {
                    this.getActiveProjects();
                }
                this.addMediaPlanDialogOpened = false;
            });
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (event.code === "KeyN" && event.altKey) {
            this.addMediaPlan();
        }
    }
}