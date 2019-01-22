import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCalendarComponent } from './client-calendar/client-calendar.component';
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
      InternalCoreModule,
  ],
  declarations: [
      ClientCalendarComponent
  ],
  exports: [
      ClientCalendarComponent
  ]
})
export class ClientModule { }
