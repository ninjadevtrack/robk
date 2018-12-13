import { IUser } from '../../user/model/user.model';
import { IInstrument } from '../../instrument/model/instrument.model';

export interface ITeacher {
    _id: string;
    user: IUser;
    experience: string;
    instruments: IInstrument[];
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class TeacherModel implements ITeacher {
    _id: string;
    user: IUser;
    experience: string;
    instruments: IInstrument[];
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor() {}
}
