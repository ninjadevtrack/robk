import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PublicEntryComponent } from "./public-entry.component";
import { HomeComponent } from "./home";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SetPasswordComponent } from "./set-password/set-password.component";
import { PublicFooterComponent } from "./footer";
import { PublicHeaderComponent } from "./header";
import { SignInComponent } from "./sign-in";
import { CoreCommonModule } from "../core/common/core-common.module";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {
        path: "",
        component: PublicEntryComponent,
        children: [
            { path: "", component: HomeComponent },
            { path: "forgotpwd", component: ForgotPasswordComponent },
            {
                path: "setpwd/:token",
                component: SetPasswordComponent,
                pathMatch: "full"
            }
        ]
    },
    { path: "404", component: NotFoundComponent },
    { path: "**", redirectTo: "/404" }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        CoreCommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PublicEntryComponent,
        PublicFooterComponent,
        ForgotPasswordComponent,
        PublicHeaderComponent,
        HomeComponent,
        NotFoundComponent,
        SetPasswordComponent,
        SignInComponent
    ],
    exports: [
        PublicEntryComponent,
        PublicFooterComponent,
        ForgotPasswordComponent,
        PublicHeaderComponent,
        HomeComponent,
        SetPasswordComponent,
        SignInComponent
    ]
})
export class PublicModule {}
