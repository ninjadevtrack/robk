import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { InstrumentModel } from '../../../../core/instrument/model/instrument.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';

@Component({
  selector: 'instrument-view',
  templateUrl: './instrument-view.component.html',
  styleUrls: ['./instrument-view.component.scss']
})
export class InstrumentViewComponent implements OnInit {

    id: string;
    instrument: InstrumentModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _instrumentService: InstrumentService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._instrumentService.get(this.id).subscribe((instrument: InstrumentModel) => {
                this.instrument = instrument;
            });
        });
    }

}
