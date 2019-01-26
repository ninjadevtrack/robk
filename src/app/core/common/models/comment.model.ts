import { IUser } from '../../user/model/user.model';

export interface IComment {
  user: IUser;
  comment: string;
  createdAt: string;
}
