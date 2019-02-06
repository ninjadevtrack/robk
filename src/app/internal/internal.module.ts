import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InternalCoreModule } from './core/internal-core.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { InternalEntryComponent } from './internal-entry.component';
import { ProfileComponent } from './common/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { CommonCalendarComponent } from './common/common-calendar/common-calendar.component';
import { InternalCommonModule } from './common/internal-common.module';
import { SdfGeneratorComponent } from "./common/sdf-generator/sdf-generator.component";

const routes: Routes = [
    { path: 'i', component: InternalEntryComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'admin', component: AdminComponent,
                children: [
                    { path: '', component: UserListComponent },
                ]
            },
            { path: 'calendar', component: CommonCalendarComponent },
            { path: 'sdf', component: SdfGeneratorComponent }
        ]
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      InternalCommonModule,
      InternalCoreModule,
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
      InternalCoreModule,
      AdminModule,
      ClientModule,
      StudentModule,
      TeacherModule
  ]
})
export class InternalModule { }
