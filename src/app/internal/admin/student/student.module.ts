import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule} from '../../../core/core.module';
import { RouterModule} from '@angular/router';
import { InternalCommonModule} from '../../common/internal-common.module';
import { ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {AdminStudentCalendarComponent} from './admin-student-calendar/admin-student-calendar.component';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentListRootComponent} from './student-list-root/student-list-root.component';
import {StudentViewComponent} from './student-view/student-view.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    InternalCommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  declarations: [
      AdminStudentCalendarComponent,
      StudentAddComponent,
      StudentEditComponent,
      StudentListComponent,
      StudentListRootComponent,
      StudentViewComponent
  ],
  exports: [
      AdminStudentCalendarComponent,
      StudentAddComponent,
      StudentEditComponent,
      StudentListComponent,
      StudentListRootComponent,
      StudentViewComponent
  ],
  entryComponents: [
      StudentViewComponent,
      StudentEditComponent,
      StudentAddComponent
  ]
})
export class StudentModule { }
