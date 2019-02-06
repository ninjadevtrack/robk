import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IDevice} from "../../../core/device/device";
import {DeviceService} from "../../../core/device/device.service";
import {IGeo} from "../../../core/geo/geo";
import {GeoService} from "../../../core/geo/geo.service";
import {Observable, forkJoin } from "rxjs";

@Component({
  selector: 'app-sdf-generator',
  templateUrl: './sdf-generator.component.html',
  styleUrls: ['./sdf-generator.component.scss']
})
export class SdfGeneratorComponent implements OnInit {

    form: FormGroup;
    devices: IDevice[] = [];
    geos: IGeo[] = [];
    genders = ['Male', 'Female', 'Other'];

    constructor(
        private _formBuilder: FormBuilder,
        private _deviceService: DeviceService,
        private _geoService: GeoService
    ) { }

    ngOnInit() {


        forkJoin(this._deviceService.getAll(),
            this._geoService.getAll()
        ).subscribe(([devices, geos]) => {
            this.devices = devices;
            this.geos = geos;

            this.form = this._formBuilder.group({
                campaignName: ['', [Validators.required]],
                devices: [this.devices.map(d => d.id), [Validators.required]],
                geos: [this.geos.map(g => g.id), [Validators.required]],
                genders: [this.genders, [Validators.required]],
                targeting: ['', [Validators.required]]
            });
        });

    }

}
