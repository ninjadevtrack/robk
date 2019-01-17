import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './admin/user/user.module';
import { InternalCommonModule } from './common/internal-common.module';

@NgModule({
  imports: [
      CommonModule,
      InternalCommonModule,
      UserModule,
  ],
  declarations: [],
  exports: [
      InternalCommonModule,
      UserModule,

  ]
})
export class InternalModule { }
