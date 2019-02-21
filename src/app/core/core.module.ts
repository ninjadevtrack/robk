import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ClientService } from './client/client.service';
import { CoreCommonModule } from './common/core-common.module';
import { UserService } from './user/user.service';
import { CustomBrowserXhr } from './custom-browser-xhr.service';
import { FakeStorage } from './fake-storage';
import { HttpHelperService } from './http-helper.service';
import { SmoothScrollService } from './smooth-scroll.service';
import { WindowRefService } from './window.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
      CommonModule,
      CoreCommonModule,
      HttpClientModule
  ],
  declarations: [
  ],
  providers: [
      CustomBrowserXhr,
      FakeStorage,
      HttpHelperService,
      SmoothScrollService,
      WindowRefService,
      AuthService,
      ClientService,
      UserService,

  ],
  exports: [
      CoreCommonModule
  ]
})
export class CoreModule { }
