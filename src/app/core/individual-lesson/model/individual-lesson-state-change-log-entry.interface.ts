import { IUser } from '../../user/model/user.model';
import { EIndividualLessonState } from './individual-lesson-state.enum';

export interface IIndividualLessonStateChangeLogEntry {
    individualLesson: string;
    user: IUser;
    from: EIndividualLessonState;
    to: EIndividualLessonState;
    createdAt: string;
}
