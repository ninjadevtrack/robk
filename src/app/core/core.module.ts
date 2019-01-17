import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
      AppealService
  ]
})
export class CoreModule { }
