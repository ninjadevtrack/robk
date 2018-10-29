export interface IProject {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class ProjectModel implements IProject {
    _id: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;

    constructor(
    ){}
}