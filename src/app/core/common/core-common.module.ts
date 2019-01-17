import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityModule } from './entity/entity.module';
import { AuthStorageService } from './auth-storage.service';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
      CommonModule,
      EntityModule,
  ],
  providers: [
      AuthStorageService,
      ConfigService,

  ],
  exports: [
      EntityModule
  ]
})
export class CoreCommonModule { }
