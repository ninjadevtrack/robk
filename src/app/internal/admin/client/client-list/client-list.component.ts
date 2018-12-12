import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { IClient, ClientModel } from '../../../../core/client/model/client.model';
import { ClientService } from '../../../../core/client/client.service';
import { ClientAddComponent } from "../client-add/client-add.component";
import { SearchPipe } from '../../../common/search.pipe';
import { Form, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'client-list',
    styleUrls: [ './client-list.component.css' ],
    templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

    form: FormGroup;
    public activeClients: IClient[] = [];
    public archivedClients: IClient[] = [];
    addClientDialogOpened: boolean;
    searchPipe: SearchPipe = new SearchPipe();
    searchFields: string = 'user.firstName,user.lastName,user.email';

    constructor(
        private _clientService: ClientService,
        private _formBuilder: FormBuilder,
        private _dialog: MatDialog
    ) {
        this.addClientDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEntities();

        this.form = this._formBuilder.group({
            search: ['', []]
        });
    }

    public getAllEntities() {
        // Get active users
        this.getActiveEntities();
        // Get archived users
        this.getArchivedEntitites();
    }

    private getArchivedEntitites() {
        this._clientService.getAllArchived().subscribe((entities: ClientModel[]) => {
            this.archivedClients = entities;
        });
    }

    private getActiveEntities() {
        this._clientService.getAllActive().subscribe((entities: ClientModel[]) => {
            this.activeClients = entities;
        });
    }

    public getFilteredActiveEntities() {
        return this.searchPipe.transform(this.activeClients, this.searchFields, this.form.controls['search'].value);
    }

    public getFilteredArchivedEntities() {
        return this.searchPipe.transform(this.archivedClients, this.searchFields, this.form.controls['search'].value);
    }

    addEntity() {
        if (!this.addClientDialogOpened) {
            const dialogRef = this._dialog.open(ClientAddComponent, {});
            this.addClientDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getActiveEntities();
                }
                this.addClientDialogOpened = false;
            });
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (event.code === "KeyN" && event.altKey) {
            this.addEntity();
        }
    }
}
