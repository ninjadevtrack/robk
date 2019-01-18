import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFieldComponent } from './data-field/data-field.component';
import { NumberWithSeparatorPipe } from './number-with-separator.pipe';
import { SearchPipe } from './search.pipe';
import { CalendarModule, DateAdapter } from './calendar/angular-calendar';
import { adapterFactory } from './calendar/angular-calendar/date-adapters/date-fns';
import { DemoUtilsModule } from './calendar/utils/module';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { IndividualLessonAddEditComponent } from './calendar/individual-lesson/individual-lesson-add-edit/individual-lesson-add-edit.component';
import { RootCalendarComponent } from './calendar/root-calendar/root-calendar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { IconLinkButtonComponent } from './icon-link-button/icon-link-button.component';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CardTemplateComponent } from './templates/card-template/card-template.component';
import { EntityModule } from './entity/entity.module';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
      }),
      DemoUtilsModule,
      EntityModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatButtonModule,
      MatSelectModule,
      MatOptionModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      NgbModule
  ],
  declarations: [
      DataFieldComponent,
      NumberWithSeparatorPipe,
      SearchPipe,
      CalendarComponent,
      IndividualLessonAddEditComponent,
      RootCalendarComponent,
      ConfirmDialogComponent,
      IconLinkButtonComponent,
      CardTemplateComponent,
  ],
  exports: [
      EntityModule,
      DataFieldComponent,
      NumberWithSeparatorPipe,
      SearchPipe,
      CalendarModule,
      CalendarComponent,
      IndividualLessonAddEditComponent,
      RootCalendarComponent,
      ConfirmDialogComponent,
      IconLinkButtonComponent,
      CardTemplateComponent
  ],
  entryComponents: [
      IndividualLessonAddEditComponent,
      ConfirmDialogComponent
  ]
})
export class InternalCoreModule { }
