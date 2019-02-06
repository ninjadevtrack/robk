import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InternalHeaderComponent } from './header/header.component';
import { InternalCoreModule } from '../core/internal-core.module';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import { CommonCalendarComponent } from './common-calendar/common-calendar.component';
import { StudentModule } from '../student/student.module';
import { ClientModule } from '../client/client.module';
import { TeacherModule } from '../teacher/teacher.module';
import { SdfGeneratorComponent } from './sdf-generator/sdf-generator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LineItemComponent } from './sdf-generator/line-item/line-item.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MatMenuModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      InternalCoreModule,
      ReactiveFormsModule,
      StudentModule,
      ClientModule,
      TeacherModule
  ],
  declarations: [
      ProfileComponent,
      InternalHeaderComponent,
      CommonCalendarComponent,
      SdfGeneratorComponent,
      LineItemComponent
  ],
  exports: [
      ProfileComponent,
      InternalHeaderComponent,
      CommonCalendarComponent
  ]
})
export class InternalCommonModule { }
