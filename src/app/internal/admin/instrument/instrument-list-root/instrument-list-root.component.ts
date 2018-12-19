import { Component, OnInit } from '@angular/core';
import {InstrumentModel} from '../../../../core/instrument/model/instrument.model';
import {InstrumentService} from '../../../../core/instrument/instrument.service';

@Component({
  selector: 'app-instrument-list-root',
  templateUrl: './instrument-list-root.component.html',
  styleUrls: ['./instrument-list-root.component.scss']
})
export class InstrumentListRootComponent implements OnInit {

    entities: InstrumentModel[];

    constructor(
        private _entityService: InstrumentService
    ) { }

    ngOnInit() {
        this.getEntities();
    }

    getEntities() {
        this._entityService.getAll().subscribe((entities: InstrumentModel[]) => {
            this.entities = entities;
        });
    }

}
