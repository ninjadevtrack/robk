import { IUser } from '../../user/model/user.model';

export interface IClient {
    _id: string;
    user: IUser;
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class ClientModel implements IClient {
    _id: string;
    user: IUser;
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor() {}
}
