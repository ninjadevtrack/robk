export interface IService {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class ServiceModel implements IService {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor(
    ){}
}