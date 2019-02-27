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
    graphBig: string;
    eng: number;
    sales: number;
    percentEng: number;
    percentSales: number;
    growth6Eng: number;
    growth6Sales: number;
    cbLastFundingDate: string;
    cbLastSeries: string;
    cbLastPremoneyUsd: string;
}

export interface ICompany {
    options: ICompanyOptions;
    value: ICompanyValue;
}
