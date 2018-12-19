import { IUser } from '../../user/model/user.model';
import { IClient } from '../../client/model/client.model';

export interface IStudent {
    _id: string;
    user: IUser;
    client: IClient;
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class StudentModel implements IStudent {
    _id: string;
    user: IUser;
    client: IClient;
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor() {}
}
