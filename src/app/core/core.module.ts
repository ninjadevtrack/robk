import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';
import { AuthService } from './auth/auth.service';
import { ClientService } from './client/client.service';
import { EntityModule } from './common/entity/entity.module';

@NgModule({
  imports: [
    CommonModule,
    EntityModule
  ],
  declarations: [],
  providers: [
      AuthService,
      AppealService,
      ClientService
  ],
  exports: [
      EntityModule
  ]
})
export class CoreModule { }
