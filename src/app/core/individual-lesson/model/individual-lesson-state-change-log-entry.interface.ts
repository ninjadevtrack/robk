import { IUser } from '../../user/model/user.model';
import { EIndividualLessonAction } from './individual-lesson-action.enum';

export interface IIndividualLessonStateChangeLogEntry {
    individualLesson: string;
    user: IUser;
    from: EIndividualLessonAction;
    to: EIndividualLessonAction;
    createdAt: string;
}
