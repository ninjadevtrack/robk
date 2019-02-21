import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClientModel } from '../../../../core/client/model/client.model';
import { ClientService } from '../../../../core/client/client.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../../core/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

    hasStudentAccount: boolean = false;
    id: string;
    client: ClientModel;

    constructor(
        private _dialog: MatDialog,
        private _router: Router,
        private _route: ActivatedRoute,
        private _clientService: ClientService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this.getClient();

            this.getStudents();

            this.verifyIfClientHasStudentAccount();

        });
    }

    verifyIfClientHasStudentAccount() {

    }

    getClient() {
        this._clientService.get(this.id).subscribe((client: ClientModel) => {
            this.client = client;
        });
    }

    getStudents() {

    }

    createStudentAccount() {
        const dialogRef = this._dialog.open(ConfirmDialogComponent, {
            data: {
                name: `for ${this.entityLabel(this.client)}`,
                verb: 'create a student account'
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.confirmed) {
                // Create Student Account
            }
        });
    }

    protected entityLabel(entity: any) {
        return `${entity.user.lastName} ${entity.user.firstName} (${entity.user.appeal})`;
    }

}
