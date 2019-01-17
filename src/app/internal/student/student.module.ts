import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { CoreModule } from '../../core/core.module';
import { InternalCommonModule } from '../common/internal-common.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatOptionModule,
      CoreModule,
      InternalCommonModule
  ],
  declarations: [
      StudentCalendarComponent
  ],
  exports: [
      StudentCalendarComponent
  ]
})
export class StudentModule { }
