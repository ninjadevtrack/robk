import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import {ClientModule} from './client/client.module';

@NgModule({
  imports: [
      CommonModule,
      TeacherModule,
      StudentModule,
      ClientModule,
      UserModule
  ],
  declarations: [],
  exports: [
      TeacherModule,
      UserModule,
      StudentModule,
      ClientModule,
      UserModule
  ]
})
export class AdminModule { }
