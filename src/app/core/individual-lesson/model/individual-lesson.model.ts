import {ITeacher} from '../../teacher/model/teacher.model';
import {IStudent} from '../../student/model/student.model';

export interface IIndividualLesson {
    _id: string;
    teacher: ITeacher;
    student: IStudent;
    title: string;
    description: string;
    start: string;
    end: string;
    updatedAt: string;
    createdAt: string;
}

export class IndividualLessonModel implements IIndividualLesson {
    _id: string;
    teacher: ITeacher;
    student: IStudent;
    title: string;
    description: string;
    start: string;
    end: string;
    updatedAt: string;
    createdAt: string;

    constructor() {}
}
