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
import { EnrollmentViewComponent } from "./internal/admin/enrollment/enrollment-view/enrollment-view.component";
import { CalendarComponent } from './internal/calendar/calendar.component';
import { ServiceViewComponent } from './internal/admin/service/service-view/service-view.component';
import { EnrollmentEditComponent } from './internal/admin/enrollment/enrollment-edit/enrollment-edit.component';
import { InstrumentViewComponent } from './internal/admin/instrument/instrument-view/instrument-view.component';
import { ClientViewComponent } from './internal/admin/client/client-view/client-view.component';
import { ClientEditComponent } from './internal/admin/client/client-edit/client-edit.component';
import { TeacherViewComponent } from './internal/admin/teacher/teacher-view/teacher-view.component';
import { TeacherEditComponent } from './internal/admin/teacher/teacher-edit/teacher-edit.component';
import { StudentViewComponent } from './internal/admin/student/student-view/student-view.component';
import { StudentEditComponent } from './internal/admin/student/student-edit/student-edit.component';
import {StudentListRootComponent} from './internal/admin/student/student-list-root/student-list-root.component';
import {ServiceListRootComponent} from './internal/admin/service/service-list-root/service-list-root.component';
import {InstrumentListRootComponent} from './internal/admin/instrument/instrument-list-root/instrument-list-root.component';
import {TeacherListRootComponent} from './internal/admin/teacher/teacher-list-root/teacher-list-root.component';
import {ClientListRootComponent} from './internal/admin/client/client-list-root/client-list-root.component';
import {EnrollmentListRootComponent} from './internal/admin/enrollment/enrollment-list-root/enrollment-list-root.component';
import {TeacherCalendarComponent} from './internal/admin/teacher/teacher-calendar/teacher-calendar.component';
import {StudentCalendarComponent} from './internal/admin/student/student-calendar/student-calendar.component';
import {ClientCalendarComponent} from './internal/admin/client/client-calendar/client-calendar.component';

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
                    { path: 'clients', component: ClientListRootComponent },
                    { path: 'clients/:id', component: ClientViewComponent },
                    { path: 'clients/:id/edit', component: ClientEditComponent },
                    { path: 'clients/:id/calendar', component: ClientCalendarComponent },
                    { path: 'students', component: StudentListRootComponent },
                    { path: 'students/:id', component: StudentViewComponent },
                    { path: 'students/:id/edit', component: StudentEditComponent },
                    { path: 'students/:id/calendar', component: StudentCalendarComponent },
                    { path: 'teachers', component: TeacherListRootComponent },
                    { path: 'teachers/:id', component: TeacherViewComponent },
                    { path: 'teachers/:id/edit', component: TeacherEditComponent },
                    { path: 'teachers/:id/calendar', component: TeacherCalendarComponent },
                    { path: 'enrollments', component: EnrollmentListRootComponent },
                    { path: 'enrollments/:id', component: EnrollmentViewComponent },
                    { path: 'enrollments/:id/edit', component: EnrollmentEditComponent },
                    { path: 'services', component: ServiceListRootComponent },
                    { path: 'services/:id', component: ServiceViewComponent },
                    { path: 'instruments', component: InstrumentListRootComponent },
                    { path: 'instruments/:id', component: InstrumentViewComponent }
                ]
            },
            { path: 'calendar', component: CalendarComponent }
        ]
    },
    { path: '**', component: NoContentComponent }
];
