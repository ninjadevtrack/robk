export interface ICapsuleUser {
    id: number;
    username: string;
    pictureURL: string;
    name: string;
}

export interface ICapsuleActivityType {
    id: number;
    name: string;
}

export interface ICapsuleParty {
    id: number;
    type: string;
    name: string;
    pictureURL: string;
}

export interface ICapsuleNote {
    id: number;
    attachments: any[];
    creator: ICapsuleUser;
    activityType: ICapsuleActivityType;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    entryAt: Date;
    type: string;
    opportunity: any;
    kase: any;
    party: ICapsuleParty;
}
