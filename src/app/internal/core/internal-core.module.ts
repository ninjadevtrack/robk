import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFieldComponent } from './data-field/data-field.component';
import { NumberWithSeparatorPipe } from './number-with-separator.pipe';
import { SearchPipe } from './search.pipe';
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
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule, MatProgressSpinnerModule, MatDialogModule,
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
      EntityModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatDialogModule,
      MatDatepickerModule,
      MatMenuModule,
      MatButtonModule,
      MatSelectModule,
      MatOptionModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatCardModule,
      NgbModule
  ],
  declarations: [
      DataFieldComponent,
      NumberWithSeparatorPipe,
      SearchPipe,
      ConfirmDialogComponent,
      IconLinkButtonComponent,
      CardTemplateComponent
  ],
  exports: [
      EntityModule,
      DataFieldComponent,
      NumberWithSeparatorPipe,
      SearchPipe,
      ConfirmDialogComponent,
      IconLinkButtonComponent,
      CardTemplateComponent
  ],
  entryComponents: [
      ConfirmDialogComponent
  ]
})
export class InternalCoreModule { }
