import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IDevice} from "../../../core/device/device";
import {DeviceService} from "../../../core/device/device.service";
import {IGeo} from "../../../core/geo/geo";
import {GeoService} from "../../../core/geo/geo.service";

@Component({
  selector: 'app-sdf-generator',
  templateUrl: './sdf-generator.component.html',
  styleUrls: ['./sdf-generator.component.scss']
})
export class SdfGeneratorComponent implements OnInit {

    form: FormGroup;
    devices: IDevice[];
    geos: IGeo[];
    genders = ['Male', 'Female', 'Other'];

    constructor(
        private _formBuilder: FormBuilder,
        private _deviceService: DeviceService,
        private _geoService: GeoService
    ) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            campaignName: ['', Validators.required],
            devices: [[], Validators.required],
            geos: [[], Validators.required],
            gender: ['', Validators.required],
            targeting: ['', Validators.required]
        });

        this._deviceService.getAll().subscribe((devices: IDevice[]) => {
            this.devices = devices;
            this.form.controls['devices'].setValue([this.devices[0].id]);
        });

        this._geoService.getAll().subscribe((geos: IGeo[]) => {
            this.geos = geos;
            this.form.controls['geos'].setValue([this.geos[0].id]);
        });

    }

}
