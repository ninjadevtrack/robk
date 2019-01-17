import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { ClientModule } from './client/client.module';
import { ServiceModule } from './service/service.module';
import { InstrumentModule } from './instrument/instrument.module';

@NgModule({
  imports: [
      CommonModule,
      TeacherModule,
      StudentModule,
      ClientModule,
      ServiceModule,
      InstrumentModule,
      UserModule
  ],
  declarations: [],
  exports: [
      TeacherModule,
      UserModule,
      StudentModule,
      ClientModule,
      ServiceModule,
      InstrumentModule,
      UserModule
  ]
})
export class AdminModule { }
