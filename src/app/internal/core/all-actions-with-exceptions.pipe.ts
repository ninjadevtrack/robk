import { Pipe, PipeTransform } from '@angular/core';
import { IIndividualLessonAction } from '../../core/individual-lesson/model/individual-lesson-action.interface';
import { EIndividualLessonActions } from '../../core/individual-lesson/model/individual-lesson-actions.enum';

@Pipe({
  name: 'allActionsWithExceptions'
})
export class AllActionsWithExceptionsPipe implements PipeTransform {

  transform(items: IIndividualLessonAction[], exceptItems: EIndividualLessonActions[]): any {
    return items.filter(i => !exceptItems.includes(i.action));
  }

}
