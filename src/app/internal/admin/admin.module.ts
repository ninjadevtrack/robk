import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { ClientModule } from './client/client.module';
import { ServiceModule } from './service/service.module';

@NgModule({
  imports: [
      CommonModule,
      TeacherModule,
      StudentModule,
      ClientModule,
      ServiceModule,
      UserModule
  ],
  declarations: [],
  exports: [
      TeacherModule,
      UserModule,
      StudentModule,
      ClientModule,
      ServiceModule,
      UserModule
  ]
})
export class AdminModule { }
