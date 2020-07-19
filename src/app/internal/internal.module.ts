import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { InternalCoreModule } from "./core/internal-core.module";
import { AdminModule } from "./admin/admin.module";
import { InternalEntryComponent } from "./internal-entry.component";
import { ProfileComponent } from "./common/profile/profile.component";
import { AdminComponent } from "./admin/admin.component";
import { UserListComponent } from "./admin/user/user-list/user-list.component";
import { InternalCommonModule } from "./common/internal-common.module";
import { CompanyListComponent } from "./common/company/company-list/company-list.component";
import { UserViewComponent } from "./admin/user/user-view/user-view.component";
import { UserEditComponent } from "./admin/user/user-edit/user-edit.component";
import { AuthGuardService } from "../core/auth/auth-guard.service";
import { ScoreFeedComponent } from "./common/score-feed/score-feed.component";
import { CompanyViewComponent } from "./common/company/company-view/company-view.component";
import { ReportListComponent } from "./common/reports/report-list/report-list.component";
import { EmployerChangeReportComponent } from "./common/reports/employer-change-report/employer-change-report.component";

const routes: Routes = [
    {
        path: "i",
        component: InternalEntryComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "feed"
            },
            { path: "profile", component: ProfileComponent },
            {
                path: "admin",
                component: AdminComponent,
                children: [
                    { path: "", component: UserListComponent },
                    { path: "users/:id", component: UserViewComponent },
                    { path: "users/:id/edit", component: UserEditComponent }
                ]
            },
            { path: "feed", component: ScoreFeedComponent },
            { path: "gwl", component: CompanyListComponent },
            { path: "gwl/:slug", component: CompanyViewComponent },
            { path: "reports", component: ReportListComponent },
            {
                path: "reports/employer-change",
                component: EmployerChangeReportComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        InternalCommonModule,
        InternalCoreModule,
        AdminModule
    ],
    declarations: [InternalEntryComponent],
    exports: [
        InternalEntryComponent,
        InternalCommonModule,
        InternalCoreModule,
        AdminModule
    ]
})
export class InternalModule {}
