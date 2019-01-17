import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
      AppealService,
      AuthService
  ]
})
export class CoreModule { }
