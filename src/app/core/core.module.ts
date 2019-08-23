import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth/auth.service";
import { CoreCommonModule } from "./common/core-common.module";
import { UserService } from "./user/user.service";
import { CustomBrowserXhr } from "./custom-browser-xhr.service";
import { FakeStorage } from "./fake-storage";
import { HttpHelperService } from "./http-helper.service";
import { SmoothScrollService } from "./smooth-scroll.service";
import { WindowRefService } from "./window.service";
import { HttpClientModule } from "@angular/common/http";
import { ScalingService } from "./scaling/scaling.service";
import { RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { CompanyService } from "./company/company.service";
import { ActivityFeedService } from "./activity-feed/activity-feed.service";

@NgModule({
    imports: [RouterModule, CommonModule, CoreCommonModule, HttpClientModule],
    declarations: [],
    providers: [
        CustomBrowserXhr,
        FakeStorage,
        HttpHelperService,
        SmoothScrollService,
        WindowRefService,
        AuthService,
        AuthGuardService,
        UserService,
        ScalingService,
        CompanyService,
        ActivityFeedService
    ],
    exports: [CoreCommonModule]
})
export class CoreModule {}
