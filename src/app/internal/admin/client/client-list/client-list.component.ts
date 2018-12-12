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
    searchFields: string = 'firstName,lastName,email';

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

    private filterClients(clients: IClient[]): IClient[] {
        const users = clients.map(c =>  c.user);
        const filteredUsersIds = this.searchPipe.transform(users, this.searchFields, this.form.controls['search'].value).map(u => u._id);
        return clients.filter(c => filteredUsersIds.includes(c.user._id));
    }

    public getFilteredActiveEntities() {
        return this.filterClients(this.activeClients);
    }

    public getFilteredArchivedEntities() {
        return this.filterClients(this.archivedClients);
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
