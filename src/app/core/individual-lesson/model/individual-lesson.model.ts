import {ITeacher} from '../../teacher/model/teacher.model';
import {IStudent} from '../../student/model/student.model';

export interface IIndividualLesson {
    _id: string;
    teacher: ITeacher;
    student: IStudent;
    title: string;
    description: string;
    state: string;
    start: string;
    end: string;
    updatedAt: string;
    createdAt: string;
    movable?: boolean;
}

export class IndividualLessonModel implements IIndividualLesson {
    _id: string;
    teacher: ITeacher;
    student: IStudent;
    title: string;
    description: string;
    state: string;
    start: string;
    end: string;
    updatedAt: string;
    createdAt: string;
    movable?: boolean;

    constructor() {}
}
