import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStorageService } from './auth-storage.service';
import { ConfigService } from './config.service';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [
      NoContentComponent,
  ],
  providers: [
      AuthStorageService,
      ConfigService,
  ],
  exports: [
      NoContentComponent
  ]
})
export class CoreCommonModule { }
