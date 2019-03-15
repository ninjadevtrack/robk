import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      UserModule
  ],
  declarations: [
      AdminComponent
  ],
  exports: [
      AdminComponent,
      UserModule,
      UserModule
  ]
})
export class AdminModule { }
