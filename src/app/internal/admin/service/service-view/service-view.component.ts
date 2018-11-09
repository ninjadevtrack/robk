import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ServiceService } from "../../../../core/service/service.service";
import { IService, ServiceModel } from "../../../../core/service/model/service.model";

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.scss']
})
export class ServiceViewComponent implements OnInit {

    id: string;
    service: ServiceModel;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _serviceService: ServiceService
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._serviceService.get(this.id).subscribe((service: ServiceModel) => {
                this.service = service;
            });
        });
    }

}
