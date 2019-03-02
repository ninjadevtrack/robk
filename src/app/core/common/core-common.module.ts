import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStorageService } from './auth-storage.service';
import { ConfigService } from './config.service';
import { NoContentComponent } from './no-content/no-content.component';
import { ChartService } from "./chart.service";

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
      ChartService
  ],
  exports: [
      NoContentComponent
  ]
})
export class CoreCommonModule { }
