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
    MatMenuModule, MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import { CommonCalendarComponent } from './common-calendar/common-calendar.component';
import { StudentModule } from '../student/student.module';
import { ClientModule } from '../client/client.module';
import { TeacherModule } from '../teacher/teacher.module';
import { SdfGeneratorComponent } from './sdf-generator/sdf-generator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LineItemListComponent } from './sdf-generator/line-item-list/line-item-list.component';

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
      MatProgressSpinnerModule,
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
      LineItemListComponent
  ],
  exports: [
      ProfileComponent,
      InternalHeaderComponent,
      CommonCalendarComponent
  ]
})
export class InternalCommonModule { }
