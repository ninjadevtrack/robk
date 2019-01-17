import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';
import { AuthService } from './auth/auth.service';
import { ClientService } from './client/client.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
      AuthService,
      AppealService,
      ClientService
  ]
})
export class CoreModule { }
