import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InternalCommonModule } from './common/internal-common.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { InternalEntryComponent } from './internal-entry.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      InternalCommonModule,
      AdminModule,
      ClientModule,
      StudentModule,
      TeacherModule
  ],
  declarations: [
      InternalEntryComponent
  ],
  exports: [
      InternalEntryComponent,
      InternalCommonModule,
      AdminModule,
      ClientModule,
      StudentModule,
      TeacherModule
  ]
})
export class InternalModule { }
