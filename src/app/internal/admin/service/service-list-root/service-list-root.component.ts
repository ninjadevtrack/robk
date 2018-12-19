import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../core/service/service.service';
import { ServiceModel } from '../../../../core/service/model/service.model';

@Component({
  selector: 'app-service-list-root',
  templateUrl: './service-list-root.component.html',
  styleUrls: ['./service-list-root.component.scss']
})
export class ServiceListRootComponent implements OnInit {

  entities: ServiceModel[];

  constructor(
      private _entityService: ServiceService
  ) { }

  ngOnInit() {
    this.getEntities();
  }

  getEntities() {
      this._entityService.getAll().subscribe((entities: ServiceModel[]) => {
          this.entities = entities;
      });
  }
}
