import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTeacherCalendarComponent } from './admin-teacher-calendar/admin-teacher-calendar.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherListRootComponent } from './teacher-list-root/teacher-list-root.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
} from '@angular/material';
import {CoreModule} from '../../../core/core.module';
import {InternalCoreModule} from '../../core/internal-core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      CoreModule,
      RouterModule,
      InternalCoreModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatOptionModule
  ],
  declarations: [
      AdminTeacherCalendarComponent,
      TeacherAddComponent,
      TeacherEditComponent,
      TeacherListComponent,
      TeacherListRootComponent,
      TeacherViewComponent
  ],
  exports: [
      AdminTeacherCalendarComponent,
      TeacherAddComponent,
      TeacherEditComponent,
      TeacherListComponent,
      TeacherListRootComponent,
      TeacherViewComponent
  ],
  entryComponents: [
      TeacherViewComponent,
      TeacherEditComponent,
      TeacherAddComponent
  ]
})
export class TeacherModule { }
