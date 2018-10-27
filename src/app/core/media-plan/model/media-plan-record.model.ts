export interface IMediaPlanRecord {
    _id: string;
    campaign: string;
    dsp: string;
    format: string;
    target: string;
    targetDetails: string;
    budget: number;
    kpi: number;
    click: number;
    impr: number;
    reach: number;
    crNum: number;
    capacity: number;
    frequency: number;
    cr: number;
    ctr: number;
    br: number;
    available: number;
    unitsOrder: number;
    buyingModel: string;
    costPerUnit: number;
    regions: string[];
    targetingGender: string;
    targetingAgeFrom: number;
    targetingAgeTo: number;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
}

export class MediaPlanRecordModel implements IMediaPlanRecord {
    constructor(
        public _id: string = null,
        public campaign: string = null,
        public dsp: string = null,
        public format: string = null,
        public target: string = null,
        public targetDetails: string = null,
        public budget: number = 0,
        public kpi: number = 0,
        public click: number = 0,
        public impr: number = 0,
        public reach: number = 0,
        public crNum: number = 0,
        public capacity: number = 0,
        public frequency: number = 1,
        public cr: number = 0.5,
        public ctr: number = 0.5,
        public br: number = 0,
        public available: number = 0,
        public unitsOrder: number = 1,
        public buyingModel: string = null,
        public costPerUnit: number = 1,
        public regions: string[] = [],
        public targetingGender: string = "MF",
        public targetingAgeFrom: number = 18,
        public targetingAgeTo: number = 20,
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
        public isActive: boolean = true
    ) {}
}

export class IMediaPlanRecordShares {
    budgetShare: number;
    kpiShare: number;
}
