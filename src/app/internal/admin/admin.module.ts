import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      ClientModule,
      UserModule
  ],
  declarations: [
      AdminComponent
  ],
  exports: [
      AdminComponent,
      UserModule,
      ClientModule,
      UserModule
  ]
})
export class AdminModule { }
