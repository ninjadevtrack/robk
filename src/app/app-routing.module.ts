import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotPasswordComponent} from "./public/forgot-password/forgot-password.component";
import {InternalEntryComponent} from "./internal/internal-entry.component";
import {HomeComponent} from "./public/home";
import {UserListComponent} from "./internal/admin/user/user-list/user-list.component";
import {ProjectListComponent} from "./internal/project/project-list/project-list.component";
import {AdminComponent} from "./internal/admin/admin.component";
import {SetPasswordComponent} from "./public/set-password/set-password.component";
import {PublicEntryComponent} from "./public/public-entry.component";
import {NoContentComponent} from "./public/no-content";
import {ProfileComponent} from "./internal/profile/profile.component";

const routes: Routes = [
    { path: '', component: PublicEntryComponent,
        children: [
            { path: '',  component: HomeComponent },
            { path: 'forgotpwd', component: ForgotPasswordComponent },
            { path: 'setpwd/:token', component: SetPasswordComponent, pathMatch: 'full'}
        ]
    },
    { path: 'i', component: InternalEntryComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'admin', component: AdminComponent,
                children: [
                    { path: '', component: UserListComponent }
                ]
            },
            { path: 'mediaplans', component: ProjectListComponent }
        ]
    },
    { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
