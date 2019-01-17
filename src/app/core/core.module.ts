import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppealService } from './appeal/appeal.service';
import { AuthService } from './auth/auth.service';
import { ClientService } from './client/client.service';
import { CoreCommonModule } from './common/core-common.module';
import { EnrollmentService } from './enrollment/enrollment.service';
import { IndividualLessonService } from './individual-lesson/individual-lesson.service';

@NgModule({
  imports: [
    CommonModule,
    CoreCommonModule
  ],
  declarations: [],
  providers: [
      AuthService,
      AppealService,
      ClientService,
      EnrollmentService,
      IndividualLessonService
  ],
  exports: [
      CoreCommonModule
  ]
})
export class CoreModule { }
