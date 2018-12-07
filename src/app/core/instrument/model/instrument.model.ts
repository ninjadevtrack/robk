export interface IInstrument {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class InstrumentModel implements IInstrument {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor(
    ){}
}