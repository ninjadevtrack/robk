export interface ICapsuleDetailsTag {
    id: number;
    name: string;
    dataTag: boolean;
}

export interface ICapsuleDetailsFieldDefinition {
    id: number;
    name: string;
}

export interface ICapsuleDetailsField {
    id: number;
    definition: ICapsuleDetailsFieldDefinition;
    tagId: number;
    value: string;
}

export interface ICapsuleDetailsAddress {
    id: number;
    type: string;
    city: string;
    country: string;
    street: string;
    state: string;
    zip: string;
}

export interface ICapsuleDetailsWebsite {
    id: number;
    type: string;
    address: string;
    service: string;
    url: string;
}

export interface ICapsuleDetails {
    id: number;
    owner: any;
    team: any;
    type: string;
    tags: ICapsuleDetailsTag[];
    about: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    lastContactedAt: Date;
    pictureURL: string;
    fields: ICapsuleDetailsField[];
    phoneNumbers: any[];
    addresses: ICapsuleDetailsAddress[];
    emailAddresses: any[];
    websites: ICapsuleDetailsWebsite[];
}
