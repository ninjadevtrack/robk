import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClientModel } from '../../../../core/client/model/client.model';
import { ClientService } from '../../../../core/client/client.service';

@Component({
  selector: 'client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

    id: string;
    client: ClientModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _clientService: ClientService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._clientService.get(this.id).subscribe((client: ClientModel) => {
                this.client = client;
            });
        });
    }

}
