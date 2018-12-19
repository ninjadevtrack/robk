import { Component, OnInit } from '@angular/core';
import {TeacherModel} from '../../../../core/teacher/model/teacher.model';
import {TeacherService} from '../../../../core/teacher/teacher.service';

@Component({
  selector: 'app-teacher-list-root',
  templateUrl: './teacher-list-root.component.html',
  styleUrls: ['./teacher-list-root.component.scss']
})
export class TeacherListRootComponent implements OnInit {

  entities: TeacherModel[];

  constructor(
      private _entityService: TeacherService
  ) { }

  ngOnInit() {
      this.getEntities();
  }

  getEntities() {
      this._entityService.getAll().subscribe((entities: TeacherModel[]) => {
          this.entities = entities;
      });
  }

}
