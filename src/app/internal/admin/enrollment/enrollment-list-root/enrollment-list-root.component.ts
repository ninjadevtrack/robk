import { Component, OnInit } from '@angular/core';
import {EnrollmentModel} from '../../../../core/enrollment/model/enrollment.model';
import {EnrollmentService} from '../../../../core/enrollment/enrollment.service';

@Component({
  selector: 'app-enrollment-list-root',
  templateUrl: './enrollment-list-root.component.html',
  styleUrls: ['./enrollment-list-root.component.scss']
})
export class EnrollmentListRootComponent implements OnInit {

    entities: EnrollmentModel[];

    constructor(
        private _entityService: EnrollmentService
    ) { }

    ngOnInit() {
        this.getEntities();
    }

    getEntities() {
        this._entityService.getAll().subscribe((entities: EnrollmentModel[]) => {
            this.entities = entities;
        });
    }

}
