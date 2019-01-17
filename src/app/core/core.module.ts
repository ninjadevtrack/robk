import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';
import { AuthService } from './auth/auth.service';
import { ClientService } from './client/client.service';
import { CoreCommonModule } from './common/core-common.module';
import { EnrollmentService } from './enrollment/enrollment.service';
import { IndividualLessonService } from './individual-lesson/individual-lesson.service';
import { InstrumentService } from './instrument/instrument.service';
import { ServiceService } from './service/service.service';
import { StudentService } from './student/student.service';
import { TeacherService } from './teacher/teacher.service';
import { UserService } from './user/user.service';
import { CustomBrowserXhr } from './custom-browser-xhr.service';
import { FakeStorage } from './fake-storage';
import { HttpHelperService } from './http-helper.service';
import { SmoothScrollService } from './smooth-scroll.service';
import { WindowRefService } from './window.service';

@NgModule({
  imports: [
    CommonModule,
    CoreCommonModule
  ],
  declarations: [],
  providers: [
      CustomBrowserXhr,
      FakeStorage,
      HttpHelperService,
      SmoothScrollService,
      WindowRefService,
      AuthService,
      AppealService,
      ClientService,
      EnrollmentService,
      IndividualLessonService,
      InstrumentService,
      ServiceService,
      StudentService,
      TeacherService,
      UserService,

  ],
  exports: [
      CoreCommonModule
  ]
})
export class CoreModule { }
