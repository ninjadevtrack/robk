import { IUser } from '../../../../core/user/model/user.model';


export interface IActivityRecord {
    user: IUser;
    message: string;
    createdAt: string;
}
