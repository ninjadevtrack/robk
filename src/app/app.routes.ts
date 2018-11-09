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
import { EnrollmentListComponent } from "./internal/enrollment/enrollment-list/enrollment-list.component";
import { EnrollmentViewComponent } from "./internal/enrollment/enrollment-view/enrollment-view.component";
import { CalendarComponent } from './internal/calendar/calendar.component';
import { ServiceListComponent } from './internal/admin/service/service-list/service-list.component';
import { ServiceViewComponent } from './internal/admin/service/service-view/service-view.component';

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
                    { path: '', component: UserListComponent },
                    { path: 'services', component: ServiceListComponent },
                    { path: 'services/:id', component: ServiceViewComponent }
                ]
            },
            { path: 'enrollments', component: EnrollmentListComponent },
            { path: 'enrollments/:id', component: EnrollmentViewComponent },
            { path: 'calendar', component: CalendarComponent }
        ]
    },
    { path: '**', component: NoContentComponent }
];
