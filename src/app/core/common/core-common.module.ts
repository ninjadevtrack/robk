import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityModule } from './entity/entity.module';
import { AuthStorageService } from './auth-storage.service';
import { ConfigService } from './config.service';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  imports: [
      CommonModule,
      EntityModule,
  ],
  declarations: [
      NoContentComponent,
  ],
  providers: [
      AuthStorageService,
      ConfigService,
  ],
  exports: [
      EntityModule,
      NoContentComponent
  ]
})
export class CoreCommonModule { }
