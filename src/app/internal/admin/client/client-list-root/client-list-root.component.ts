import { Component, OnInit } from '@angular/core';
import {ClientModel} from '../../../../core/client/model/client.model';
import {ClientService} from '../../../../core/client/client.service';

@Component({
  selector: 'app-client-list-root',
  templateUrl: './client-list-root.component.html',
  styleUrls: ['./client-list-root.component.scss']
})
export class ClientListRootComponent implements OnInit {

    entities: ClientModel[];

    constructor(
        private _entityService: ClientService
    ) { }

    ngOnInit() {
        this.getEntities();
    }

    getEntities() {
        this._entityService.getAll().subscribe((entities: ClientModel[]) => {
            this.entities = entities;
        });
    }

}
