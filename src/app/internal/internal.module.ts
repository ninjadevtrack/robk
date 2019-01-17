import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InternalCommonModule } from './common/internal-common.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { InternalEntryComponent } from './internal-entry.component';
import { ProfileComponent } from './common/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { ClientListRootComponent } from './admin/client/client-list-root/client-list-root.component';
import { ClientViewComponent } from './admin/client/client-view/client-view.component';
import { ClientEditComponent } from './admin/client/client-edit/client-edit.component';
import { AdminClientCalendarComponent } from './admin/client/admin-client-calendar/admin-client-calendar.component';
import { StudentListRootComponent } from './admin/student/student-list-root/student-list-root.component';
import { StudentViewComponent } from './admin/student/student-view/student-view.component';
import { StudentEditComponent } from './admin/student/student-edit/student-edit.component';
import { AdminStudentCalendarComponent } from './admin/student/admin-student-calendar/admin-student-calendar.component';
import { TeacherListRootComponent } from './admin/teacher/teacher-list-root/teacher-list-root.component';
import { TeacherViewComponent } from './admin/teacher/teacher-view/teacher-view.component';
import { TeacherEditComponent } from './admin/teacher/teacher-edit/teacher-edit.component';
import { AdminTeacherCalendarComponent } from './admin/teacher/admin-teacher-calendar/admin-teacher-calendar.component';
import { EnrollmentListRootComponent } from './admin/enrollment/enrollment-list-root/enrollment-list-root.component';
import { EnrollmentViewComponent } from './admin/enrollment/enrollment-view/enrollment-view.component';
import { EnrollmentEditComponent } from './admin/enrollment/enrollment-edit/enrollment-edit.component';
import { ServiceListRootComponent } from './admin/service/service-list-root/service-list-root.component';
import { ServiceViewComponent } from './admin/service/service-view/service-view.component';
import { InstrumentListRootComponent } from './admin/instrument/instrument-list-root/instrument-list-root.component';
import { InstrumentViewComponent } from './admin/instrument/instrument-view/instrument-view.component';
import { RootCalendarComponent } from './common/calendar/root-calendar/root-calendar.component';

const routes: Routes = [
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
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      InternalCommonModule,
      AdminModule,
      ClientModule,
      StudentModule,
      TeacherModule
  ],
  declarations: [
      InternalEntryComponent
  ],
  exports: [
      InternalEntryComponent,
      InternalCommonModule,
      AdminModule,
      ClientModule,
      StudentModule,
      TeacherModule
  ]
})
export class InternalModule { }
