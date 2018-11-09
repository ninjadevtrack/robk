import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ServiceModel } from "../../../../core/service/model/service.model";
import { ServiceService } from "../../../../core/service/service.service";
import { ServiceEditComponent } from "../service-edit/service-edit.component";
import { EntityDeleteComponent } from '../../../entity-delete/entity-delete.component';

@Component({
    selector: 'service-menu',
    templateUrl: './service-menu.component.html',
    styleUrls: ['./service-menu.component.css']
})
export class ServiceMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: ServiceModel;
    @Output() onServiceEvent = new EventEmitter<string>();
    editServiceDialogOpened: boolean = false;


    constructor(
        private _serviceService: ServiceService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._serviceService.archive(this.model._id).subscribe((result: any) => {
            this.onServiceEvent.emit(this.model._id);
        });
    }

    activate() {
        this._serviceService.activate(this.model._id).subscribe((result: any) => {
            this.onServiceEvent.emit(this.model._id);
        });
    }

    update() {

        if (!this.editServiceDialogOpened) {

            const dialogRef = this._dialog.open(ServiceEditComponent, {
                data: {
                    id: this.model._id
                }
            });

            this.editServiceDialogOpened = true;

            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.onServiceEvent.emit(this.model._id);
                }

                this.editServiceDialogOpened = false;
            });
        }
    }

    delete() {

        const dialogRef = this._dialog.open(EntityDeleteComponent, {
            data: {
                id: this.model._id,
                name: this.model.name
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.deleted){
                this._serviceService.delete(this.model._id).subscribe((result) => {
                    this.onServiceEvent.emit(this.model._id);
                });
            }

        });
    }

}
