import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InternalHeaderComponent } from './header/header.component';
import { InternalCoreModule } from '../core/internal-core.module';
import { RouterModule } from '@angular/router';
import { MatMenuModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MatMenuModule,
      MatToolbarModule,
      InternalCoreModule
  ],
  declarations: [
      ProfileComponent,
      InternalHeaderComponent
  ],
  exports: [
      ProfileComponent,
      InternalHeaderComponent
  ]
})
export class InternalCommonModule { }
