import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { CoreModule } from '../../core/core.module';
import { InternalCoreModule } from '../core/internal-core.module';
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
      InternalCoreModule
  ],
  declarations: [
      StudentCalendarComponent
  ],
  exports: [
      StudentCalendarComponent
  ]
})
export class StudentModule { }
