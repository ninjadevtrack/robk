import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';

@NgModule({
  imports: [
      CommonModule,
      TeacherModule,
      StudentModule,
      UserModule
  ],
  declarations: [],
  exports: [
      TeacherModule,
      UserModule,
      StudentModule
  ]
})
export class AdminModule { }
