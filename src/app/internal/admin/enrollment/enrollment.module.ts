import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { RouterModule } from '@angular/router';
import { InternalCoreModule } from '../../core/internal-core.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { EnrollmentAddComponent } from './enrollment-add/enrollment-add.component';
import { EnrollmentEditComponent } from './enrollment-edit/enrollment-edit.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollmentViewComponent } from './enrollment-view/enrollment-view.component';
import { EnrollmentListRootComponent } from './enrollment-list-root/enrollment-list-root.component';

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
        EnrollmentAddComponent,
        EnrollmentEditComponent,
        EnrollmentViewComponent,
        EnrollmentListComponent,
        EnrollmentListRootComponent
    ],
    exports: [
        EnrollmentAddComponent,
        EnrollmentEditComponent,
        EnrollmentViewComponent,
        EnrollmentListComponent,
        EnrollmentListRootComponent
    ],
    entryComponents: [
        EnrollmentViewComponent,
        EnrollmentEditComponent,
        EnrollmentAddComponent
    ]
})
export class EnrollmentModule { }
