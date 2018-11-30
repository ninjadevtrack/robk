import {IService} from '../../service/model/service.model';

export interface IEnrollment {
    _id: string;
    firstName: string;
    lastName: string;
    appeal: string;
    phone: string;
    email: string;
    services: IService[];
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class EnrollmentModel implements IEnrollment {
    _id: string;
    firstName: string;
    lastName: string;
    appeal: string;
    phone: string;
    email: string;
    services: IService[];
    notes: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor(
    ){}
}