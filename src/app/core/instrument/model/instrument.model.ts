export interface IService {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class InstrumentModel implements IService {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor(
    ){}
}