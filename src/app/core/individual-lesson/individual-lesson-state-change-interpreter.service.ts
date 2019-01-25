import {Injectable} from '@angular/core';
import {IIndividualLessonStateChangeLogEntry} from './model/individual-lesson-state-change-log-entry.interface';
import {EIndividualLessonState} from './model/individual-lesson-state.enum';

@Injectable({
  providedIn: 'root'
})
export class IndividualLessonStateChangeInterpreterService {

    constructor() { }

    interpret(ilStateChangeLogEntry: IIndividualLessonStateChangeLogEntry) {
        let message;
        switch (ilStateChangeLogEntry.to) {
          case EIndividualLessonState.CLIENT_REQUESTED:
              message = `requested a lesson`;
              break;
          case EIndividualLessonState.APPOINTMENT_ACCEPTED:
              message = `accepted appointment`
              break;
          case EIndividualLessonState.SCHOOL_REQUESTED:
              message = `requested a lesson (on behalf of the academy)`;
              break;
          case EIndividualLessonState.NEW_TIME_PROPOSED_BY_SCHOOL:
              message = `proposed new time for the lesson`;
              break;
          case EIndividualLessonState.NEW_TIME_PROPOSED_BY_CLIENT:
              message = `proposed new time for the lesson`;
              break;
          case EIndividualLessonState.APPOINTED_AND_CANCELED_CORRECTLY:
              message = `canceled the lesson correctly`;
              break;
          case EIndividualLessonState.APPOINTED_AND_CANCELED_INCORRECTLY:
              message = `canceled the lesson incorrectly`;
              break;
          case EIndividualLessonState.APPOINTMENT_DECLINED:
              message = `declined the appointment`;
              break;
          case EIndividualLessonState.PASSED_AND_APPROVED_BY_SCHOOL:
              message = `approved that the lesson had passed`;
              break;
          case EIndividualLessonState.PASSED_AND_APPROVED_BY_CLIENT:
              message = `approved that the lesson had passed`;
              break;
          case EIndividualLessonState.PASSED_AND_APPROVED_BY_ALL:
              message = `approved that the lesson had passed`;
              break;
          case EIndividualLessonState.PASSED_WITH_FORCED_MONEY_WITHDRAWAL:
              message = `marked the lesson as passed with forced money withdrawal`;
              break;
          case EIndividualLessonState.PASSED_WITHOUT_MONEY_WITHDRAWAL:
              message = `marked the lesson as passed without money withdrawal`;
              break;
          default:
              break;
        }

        return message;
    }
}
