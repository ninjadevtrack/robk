import { Routes } from '@angular/router';
import { InternalEntryComponent } from './internal/internal-entry.component';
import { ProfileComponent } from './internal/common/profile/profile.component';
import { AdminComponent } from './internal/admin/admin.component';
import { UserListComponent } from './internal/admin/user/user-list/user-list.component';
import { EnrollmentViewComponent } from "./internal/admin/enrollment/enrollment-view/enrollment-view.component";
import { ServiceViewComponent } from './internal/admin/service/service-view/service-view.component';
import { EnrollmentEditComponent } from './internal/admin/enrollment/enrollment-edit/enrollment-edit.component';
import { InstrumentViewComponent } from './internal/admin/instrument/instrument-view/instrument-view.component';
import { ClientViewComponent } from './internal/admin/client/client-view/client-view.component';
import { ClientEditComponent } from './internal/admin/client/client-edit/client-edit.component';
import { TeacherViewComponent } from './internal/admin/teacher/teacher-view/teacher-view.component';
import { TeacherEditComponent } from './internal/admin/teacher/teacher-edit/teacher-edit.component';
import { StudentViewComponent } from './internal/admin/student/student-view/student-view.component';
import { StudentEditComponent } from './internal/admin/student/student-edit/student-edit.component';
import { StudentListRootComponent } from './internal/admin/student/student-list-root/student-list-root.component';
import { ServiceListRootComponent } from './internal/admin/service/service-list-root/service-list-root.component';
import { InstrumentListRootComponent } from './internal/admin/instrument/instrument-list-root/instrument-list-root.component';
import { TeacherListRootComponent } from './internal/admin/teacher/teacher-list-root/teacher-list-root.component';
import { ClientListRootComponent } from './internal/admin/client/client-list-root/client-list-root.component';
import { EnrollmentListRootComponent } from './internal/admin/enrollment/enrollment-list-root/enrollment-list-root.component';
import { AdminTeacherCalendarComponent } from './internal/admin/teacher/admin-teacher-calendar/admin-teacher-calendar.component';
import { AdminStudentCalendarComponent } from './internal/admin/student/admin-student-calendar/admin-student-calendar.component';
import { AdminClientCalendarComponent } from './internal/admin/client/admin-client-calendar/admin-client-calendar.component';
import { RootCalendarComponent } from './internal/common/calendar/root-calendar/root-calendar.component';

export const ROUTES: Routes = [
    { path: 'i', component: InternalEntryComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'admin', component: AdminComponent,
                children: [
                    { path: '', component: UserListComponent },
                    { path: 'clients', component: ClientListRootComponent },
                    { path: 'clients/:id', component: ClientViewComponent },
                    { path: 'clients/:id/edit', component: ClientEditComponent },
                    { path: 'clients/:id/calendar', component: AdminClientCalendarComponent },
                    { path: 'students', component: StudentListRootComponent },
                    { path: 'students/:id', component: StudentViewComponent },
                    { path: 'students/:id/edit', component: StudentEditComponent },
                    { path: 'students/:id/calendar', component: AdminStudentCalendarComponent },
                    { path: 'teachers', component: TeacherListRootComponent },
                    { path: 'teachers/:id', component: TeacherViewComponent },
                    { path: 'teachers/:id/edit', component: TeacherEditComponent },
                    { path: 'teachers/:id/calendar', component: AdminTeacherCalendarComponent },
                    { path: 'enrollments', component: EnrollmentListRootComponent },
                    { path: 'enrollments/:id', component: EnrollmentViewComponent },
                    { path: 'enrollments/:id/edit', component: EnrollmentEditComponent },
                    { path: 'services', component: ServiceListRootComponent },
                    { path: 'services/:id', component: ServiceViewComponent },
                    { path: 'instruments', component: InstrumentListRootComponent },
                    { path: 'instruments/:id', component: InstrumentViewComponent }
                ]
            },
            { path: 'calendar', component: RootCalendarComponent }
        ]
    },
    { path: '', loadChildren: './public/public.module#PublicModule' },
];
