import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IDevice} from "../../../core/device/device";
import {DeviceService} from "../../../core/device/device.service";
import {IGeo} from "../../../core/geo/geo";
import {GeoService} from "../../../core/geo/geo.service";
import {InterestService} from "../../../core/interest/interest.service";
import {Observable, forkJoin, of } from "rxjs";
import {IInterest} from "../../../core/interest/interest";
import {LineItemService} from "../../../core/line-item/line-item.service";
import {ILineItem} from "../../../core/line-item/i-line-item";
import {debounceTime, switchMap} from "rxjs/operators";

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
    filteredInterests: Observable<IInterest[]>;
    genders = ['Male', 'Female', 'Other'];
    ageCategories = ['18-20', '20-25', '25-30', '35-40', '40-45', '45-50', '50-55', '55-60', '60-65', '65-70'];
    lineItems: ILineItem[] = [];
    showSpinner = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _deviceService: DeviceService,
        private _geoService: GeoService,
        private _interestsService: InterestService,
        private _lineItemSevice: LineItemService
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            campaignName: ['', [Validators.required]],
            devices: [[], [Validators.required]],
            geos: [[], [Validators.required]],
            genders: [this.genders, [Validators.required]],
            ageCategories: [this.ageCategories, [Validators.required]],
            interests: [[], [Validators.required]]
        });

        forkJoin(
            this._deviceService.getAll(),
            this._geoService.getAll(),
            this._interestsService.getAll()
        ).subscribe(([devices, geos, interests]) => {
            this.devices = devices;
            this.geos = geos;
            this.interests = interests;

            this.filteredInterests = this.form.get('interests')
                .valueChanges
                .pipe(debounceTime(300), switchMap(
                    value => of(this.interests.filter(i => {
                        return value ? RegExp(`${value.toLowerCase()}`).test(i.name.toLowerCase()) : false;
                    }))
                ));
        });

    }

    displayInterestFn (interest: IInterest) {
        if (interest) { return interest.name; }
    }

    onSubmit() {

        if (!this.form.valid) { return; }

        this.showSpinner = true;

        this._lineItemSevice.generate(
            this.form.controls['campaignName'].value,
            this.devices.filter((d) => this.form.controls['devices'].value.includes(d.id)),
            this.geos.filter((g) => this.form.controls['geos'].value.includes(g.id)),
            this.interests.filter((i) => this.form.controls['interests'].value.includes(i.id)),
            this.form.controls['genders'].value,
            this.form.controls['ageCategories'].value,
        ).subscribe((lineItems: ILineItem[]) => {
            this.lineItems = lineItems;
            this.showSpinner = false;
        });
    }

}
