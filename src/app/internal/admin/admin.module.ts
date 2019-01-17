import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
      CommonModule,
      TeacherModule,
      UserModule
  ],
  declarations: [],
  exports: [
      TeacherModule,
      UserModule
  ]
})
export class AdminModule { }
