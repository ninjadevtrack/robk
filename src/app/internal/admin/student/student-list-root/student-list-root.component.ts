import { Component, OnInit } from '@angular/core';
import {StudentModel} from '../../../../core/student/model/student.model';
import {StudentService} from '../../../../core/student/student.service';

@Component({
  selector: 'app-student-list-root',
  templateUrl: './student-list-root.component.html',
  styleUrls: ['./student-list-root.component.scss']
})
export class StudentListRootComponent implements OnInit {

    entities: StudentModel[];

    constructor(
        private _entityService: StudentService
    ) { }

    ngOnInit() {
        this.getEntities();
    }

    getEntities() {
        this._entityService.getAll().subscribe((entities: StudentModel[]) => {
            this.entities = entities;
        });
    }

}
