export interface ICompanyOptions {
    classes: string;
}

export interface ICompanyValue {
    name: string;
    linkedinUrl: string;
    crmLink: string;
    maxEmp: number;
    mavgTrend: number;
    weight: number;
    maTrend: number;
    tags: string;
    location: string;
    graph: string;
    eng: number;
    sales: number;
    percent_eng: number;
    percent_sales: number;
    growth6_eng: number;
    growth6_sales: number;
}

export interface ICompany {
    options: ICompanyOptions;
    value: ICompanyValue;
}
