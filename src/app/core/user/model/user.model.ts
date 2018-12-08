export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    appeal: string;
    phone: string;
    email: string;
    isActive: boolean;
    roles: string[];
    permissions: string[];
}

export class UserModel implements IUser {
    _id: string;
    firstName: string;
    lastName: string;
    appeal: string;
    phone: string;
    email: string;
    isActive: boolean;
    roles: string[];
    permissions: string[];

    constructor () {}
}

export interface IUsersResult {
    count: number;
    perPage: number;
    firstPage: number;
    currentPage: number;
    nextPage: number;
    lastPage: number;
    docs: IUser[];
}

export class UsersResultModel implements IUsersResult {
    constructor(
        public count: number,
        public perPage: number,
        public firstPage: number,
        public currentPage: number,
        public nextPage: number,
        public lastPage: number,
        public docs: UserModel[]
    ){}
}
