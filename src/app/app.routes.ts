import { Routes } from '@angular/router';
import { HomeComponent } from './public/home';
import { PublicEntryComponent } from './public/public-entry.component';
import { InternalEntryComponent } from './internal/internal-entry.component';
import { NoContentComponent } from './public/no-content';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './public/set-password/set-password.component';
import { ProfileComponent } from './internal/profile/profile.component';
import { AdminComponent } from './internal/admin/admin.component';
import { UserListComponent } from './internal/admin/user/user-list/user-list.component';
import { ProjectListComponent } from "./internal/project/project-list/project-list.component";

export const ROUTES: Routes = [
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
            { path: 'projects', component: ProjectListComponent }
        ]
    },
    { path: '**', component: NoContentComponent }
];
