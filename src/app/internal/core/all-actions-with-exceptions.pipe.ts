import { Pipe, PipeTransform } from '@angular/core';
import { IIndividualLessonAction } from '../../core/individual-lesson/model/individual-lesson-action.interface';
import { EIndividualLessonAction } from '../../core/individual-lesson/model/individual-lesson-action.enum';

@Pipe({
  name: 'allActionsWithExceptions'
})
export class AllActionsWithExceptionsPipe implements PipeTransform {

  transform(items: IIndividualLessonAction[], exceptItems: EIndividualLessonAction[]): any {
    return items.filter(i => !exceptItems.includes(i.action));
  }

}
