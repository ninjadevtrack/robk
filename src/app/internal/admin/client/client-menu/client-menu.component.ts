import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClientModel } from '../../../../core/client/model/client.model';
import { ClientService } from '../../../../core/client/client.service';
import { saveAs } from 'file-saver/FileSaver';
import { ClientEditComponent } from "../client-edit/client-edit.component";
import { EntityDeleteComponent } from '../../../entity-delete/entity-delete.component';

@Component({
    selector: 'client-menu',
    templateUrl: './client-menu.component.html',
    styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: ClientModel;
    @Output() onClientEvent = new EventEmitter<string>();
    editClientDialogOpened: boolean = false;


    constructor(
        private _clientService: ClientService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._clientService.archive(this.model._id).subscribe(() => {
            this.onClientEvent.emit(this.model._id);
        });
    }

    activate() {
        this._clientService.activate(this.model._id).subscribe(() => {
            this.onClientEvent.emit(this.model._id);
        });
    }

    delete() {

        const dialogRef = this._dialog.open(EntityDeleteComponent, {
            data: {
                id: this.model._id,
                name: this.model.user.firstName + this.model.user.lastName
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.deleted) {
                this._clientService.delete(this.model._id).subscribe(() => {
                    this.onClientEvent.emit(this.model._id);
                });
            }

        });
    }

}
