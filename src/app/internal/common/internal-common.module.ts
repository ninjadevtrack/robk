import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFieldComponent } from './data-field/data-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      DataFieldComponent,
  ],
  exports: [
      DataFieldComponent
  ]
})
export class InternalCommonModule { }
