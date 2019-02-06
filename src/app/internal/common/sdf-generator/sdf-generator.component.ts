import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IDevice} from "../../../core/device/device";
import {DeviceService} from "../../../core/device/device.service";
import {IGeo} from "../../../core/geo/geo";
import {GeoService} from "../../../core/geo/geo.service";
import {InterestService} from "../../../core/interest/interest.service";
import {Observable, forkJoin } from "rxjs";
import {IInterest} from "../../../core/interest/interest";

@Component({
  selector: 'app-sdf-generator',
  templateUrl: './sdf-generator.component.html',
  styleUrls: ['./sdf-generator.component.scss']
})
export class SdfGeneratorComponent implements OnInit {

    form: FormGroup;
    devices: IDevice[] = [];
    geos: IGeo[] = [];
    interests: IInterest[] = [];
    genders = ['Male', 'Female', 'Other'];

    constructor(
        private _formBuilder: FormBuilder,
        private _deviceService: DeviceService,
        private _geoService: GeoService,
        private _interestsService: InterestService
    ) { }

    ngOnInit() {


        forkJoin(
            this._deviceService.getAll(),
            this._geoService.getAll(),
            this._interestsService.getAll()
        ).subscribe(([devices, geos, interests]) => {
            this.devices = devices;
            this.geos = geos;
            this.interests = interests;

            this.form = this._formBuilder.group({
                campaignName: ['', [Validators.required]],
                devices: [this.devices.map(d => d.id), [Validators.required]],
                geos: [this.geos.map(g => g.id), [Validators.required]],
                genders: [this.genders, [Validators.required]],
                interests: [this.interests.map(i => i.id), [Validators.required]]
            });
        });

    }

}
