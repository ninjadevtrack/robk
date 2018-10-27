export interface IMediaPlan {
    _id: string;
    name: string;
    clientName: string;
    description: string;
    targetingEnabled: boolean;
    targetingAgeFrom: number;
    targetingAgeTo: number;
    updatedAt: string;
    createdAt: string;
    isActive: boolean;
}

export class MediaPlanModel implements IMediaPlan {
    constructor(
        public _id: string = undefined,
        public name: string = '',
        public clientName: string = '',
        public description: string = '',
        public targetingEnabled: boolean = false,
        public targetingAgeFrom: number = 18,
        public targetingAgeTo: number = 65,
        public updatedAt: string = undefined,
        public createdAt: string = undefined,
        public isActive: boolean = true
    ){}
}

export interface IMediaPlansResult {
    count: number;
    perPage: number;
    firstPage: number;
    currentPage: number;
    nextPage: number;
    lastPage: number;
    docs: IMediaPlan[]
}

export class MediaPlansResultModel implements IMediaPlansResult {
    constructor(
        public count: number,
        public perPage: number,
        public firstPage: number,
        public currentPage: number,
        public nextPage: number,
        public lastPage: number,
        public docs: MediaPlanModel[]
    ){}
}