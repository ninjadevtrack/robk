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
import {IBasic} from "../../../core/basic/basic";
import {AudienceService} from "../../../core/audience/audience.service";
import {IAudience} from "../../../core/audience/audience";

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
    filteredInterests$: Observable<IInterest[]>;
    filteredGeos$: Observable<IGeo[]>;
    audiencies: IAudience[] = [];
    filteredAudiencies$: Observable<IAudience[]>;
    selectedGeos: IGeo[] = [];
    selectedInterests: IInterest[] = [];
    selectedAudiencies: IAudience[] = [];

    genders = ['Male', 'Female', 'Other'];
    ageCategories = ['18-20', '20-25', '25-30', '35-40', '40-45', '45-50', '50-55', '55-60', '60-65', '65-70'];
    lineItems: ILineItem[] = [];
    showSpinner = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _deviceService: DeviceService,
        private _geoService: GeoService,
        private _interestsService: InterestService,
        private _audienceService: AudienceService,
        private _lineItemSevice: LineItemService
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            campaignName: ['', [Validators.required]],
            devices: [[], [Validators.required]],
            geos: ['', [Validators.required]],
            genders: [this.genders, [Validators.required]],
            ageCategories: [this.ageCategories, [Validators.required]],
            interests: ['', [Validators.required]],
            audiencies: ['', [Validators.required]]
        });

        this.form.controls['interests'].valueChanges.subscribe((interest) => {
            if (!interest || !interest.id) { return; }
            const selectedInterest = this.selectedInterests.find(i => i.id === interest.id);
            if (!selectedInterest) {
                this.selectedInterests.push(interest);
            }
        });

        this.form.controls['geos'].valueChanges.subscribe((geo) => {
            if (!geo || !geo.id) { return; }
            const selectedGeo = this.selectedGeos.find(g => g.id === geo.id);
            if (!selectedGeo) {
                this.selectedGeos.push(geo);
            }
        });

        this.form.controls['audiencies'].valueChanges.subscribe((audience) => {
            if (!audience || !audience.id) { return; }
            const selectedAudience = this.selectedAudiencies.find(a => a.id === audience.id);
            if (!selectedAudience) {
                this.selectedAudiencies.push(audience);
            }
        });

        forkJoin(
            this._deviceService.getAll(),
            this._geoService.getAll(),
            this._interestsService.getAll(),
            this._audienceService.getAll()
        ).subscribe(([devices, geos, interests, audiencies]) => {
            this.devices = devices;
            this.geos = geos;
            this.interests = interests;
            this.audiencies = audiencies;

            const filterExpr = (value: any, basic: IBasic) => {
                return (value && typeof(value) === "string") ? RegExp(`${value.toLowerCase()}`).test(basic.name.toLowerCase()) : false;
            };

            // Filter interests
            this.filteredInterests$ = this.form.get('interests')
                .valueChanges
                .pipe(debounceTime(300), switchMap(
                    value => of(this.interests.filter(i => {
                        return filterExpr(value, i);
                    }))
                ));

            // Filter geos
            this.filteredGeos$ = this.form.get('geos')
                .valueChanges
                .pipe(debounceTime(300), switchMap(
                    value => of(this.geos.filter(g => {
                        return filterExpr(value, g);
                    }))
                ));

            // Filter audiencies
            this.filteredAudiencies$ = this.form.get('audiencies')
                .valueChanges
                .pipe(debounceTime(500), switchMap(
                    value => of(this.audiencies.filter(a => {
                        return filterExpr(value, a);
                    }))
                ));
        });

    }

    displayBasicFn (basic: IBasic) {
        if (basic) { return basic.name; }
    }

    deleteTag(basic: IBasic, tagDictionary: IBasic[]) {
        const index = tagDictionary.findIndex(i => i.id === basic.id );
        if (index !== -1) { tagDictionary.splice(index, 1); }
    }

    onSubmit() {

        if (!this.form.valid) { return; }

        this.showSpinner = true;

        this._lineItemSevice.generate(
            this.form.controls['campaignName'].value,
            this.devices.filter((d) => this.form.controls['devices'].value.includes(d.id)),
            this.selectedGeos,
            this.selectedInterests,
            this.form.controls['genders'].value,
            this.form.controls['ageCategories'].value,
        ).subscribe((lineItems: ILineItem[]) => {
            this.lineItems = lineItems;
            this.showSpinner = false;
        });
    }

}
