import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import {IService, ServiceModel} from "../../../../core/service/model/service.model";
import { ServiceService } from "../../../../core/service/service.service";
import { ServiceAddComponent } from "../service-add/service-add.component";

@Component({
    selector: 'service-list',
    styleUrls: [ './service-list.component.css' ],
    templateUrl: './service-list.component.html'
})
export class ServiceListComponent implements OnInit {
    public activeServices: IService[] = [];
    public archiveServices: IService[] = [];
    addServiceDialogOpened: boolean;

    constructor(
        private _serviceService: ServiceService,
        private _dialog: MatDialog
    ) {
        this.addServiceDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllServices();
    }

    private getAllServices() {
        // Get active users
        this.getActiveServices();
        // Get archived users
        this.getArchivedServices();
    }

    private getArchivedServices() {
        this._serviceService.getAllArchived().subscribe((services: ServiceModel[]) => {
            this.archiveServices = services;
        });
    }

    private getActiveServices() {
        this._serviceService.getAllActive().subscribe((services: ServiceModel[]) => {
            this.activeServices = services;
        });
    }

    addMediaPlan() {
        if (!this.addServiceDialogOpened) {
            const dialogRef = this._dialog.open(ServiceAddComponent, {});
            this.addServiceDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if(result) {
                    this.getActiveServices();
                }
                this.addServiceDialogOpened = false;
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