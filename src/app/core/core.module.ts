import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';
import { AuthService } from './auth/auth.service';
import { ClientService } from './client/client.service';
import {CoreCommonModule} from './common/core-common.module';

@NgModule({
  imports: [
    CommonModule,
    CoreCommonModule
  ],
  declarations: [],
  providers: [
      AuthService,
      AppealService,
      ClientService
  ],
  exports: [
      CoreCommonModule
  ]
})
export class CoreModule { }
