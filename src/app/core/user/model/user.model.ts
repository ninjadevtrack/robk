import {Role} from './role.enum';

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    roles: Role[];
    permissions: string[];
}

export class UserModel implements IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    roles: Role[];
    permissions: string[];

    constructor () {}
}
