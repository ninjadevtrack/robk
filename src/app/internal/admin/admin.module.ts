import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { ClientModule } from './client/client.module';
import { ServiceModule } from './service/service.module';
import { InstrumentModule } from './instrument/instrument.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      TeacherModule,
      StudentModule,
      ClientModule,
      ServiceModule,
      InstrumentModule,
      EnrollmentModule,
      UserModule
  ],
  declarations: [
      AdminComponent
  ],
  exports: [
      AdminComponent,
      TeacherModule,
      UserModule,
      StudentModule,
      ClientModule,
      ServiceModule,
      InstrumentModule,
      InstrumentModule,
      UserModule
  ]
})
export class AdminModule { }
