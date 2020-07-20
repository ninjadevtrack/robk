import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth/auth.service";
import { CoreCommonModule } from "./common/core-common.module";
import { UserService } from "./user/user.service";
import { FakeStorage } from "./fake-storage";
import { HttpHelperService } from "./http-helper.service";
import { SmoothScrollService } from "./smooth-scroll.service";
import { WindowRefService } from "./window.service";
import { HttpClientModule } from "@angular/common/http";
import { ScalingService } from "./scaling/scaling.service";
import { RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { CompanyService } from "./company/company.service";
import { ScoreFeedService } from "./score-feed/score-feed.service";
import { PeopleWatchService } from "./reports/peoplewatch.service";

@NgModule({
    imports: [RouterModule, CommonModule, CoreCommonModule, HttpClientModule],
    declarations: [],
    providers: [
        FakeStorage,
        HttpHelperService,
        SmoothScrollService,
        WindowRefService,
        AuthService,
        AuthGuardService,
        UserService,
        ScalingService,
        CompanyService,
        PeopleWatchService,
        ScoreFeedService
    ],
    exports: [CoreCommonModule]
})
export class CoreModule {}
