import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IDevice} from "../../../core/device/device";
import {DeviceService} from "../../../core/device/device.service";

@Component({
  selector: 'app-sdf-generator',
  templateUrl: './sdf-generator.component.html',
  styleUrls: ['./sdf-generator.component.scss']
})
export class SdfGeneratorComponent implements OnInit {

    form: FormGroup;
    devices: IDevice[];

    constructor(
        private _formBuilder: FormBuilder,
        private _deviceService: DeviceService
    ) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            campaignName: ['', Validators.required],
            devices: ['', Validators.required],
            geo: ['', Validators.required],
            gender: ['', Validators.required],
            targeting: ['', Validators.required]
        });

        this._deviceService.getAll().subscribe((devices: IDevice[]) => this.devices = devices);

    }

}
