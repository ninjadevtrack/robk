import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InternalHeaderComponent } from './header/header.component';
import { InternalCoreModule } from '../core/internal-core.module';
import { RouterModule } from '@angular/router';
import { MatMenuModule, MatToolbarModule } from '@angular/material';
import { CommonCalendarComponent } from './common-calendar/common-calendar.component';
import { StudentModule } from '../student/student.module';
import { ClientModule } from '../client/client.module';
import { TeacherModule } from '../teacher/teacher.module';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MatMenuModule,
      MatToolbarModule,
      InternalCoreModule,
      StudentModule,
      ClientModule,
      TeacherModule
  ],
  declarations: [
      ProfileComponent,
      InternalHeaderComponent,
      CommonCalendarComponent
  ],
  exports: [
      ProfileComponent,
      InternalHeaderComponent,
      CommonCalendarComponent
  ]
})
export class InternalCommonModule { }
