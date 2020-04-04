export interface ICompany {
    name: string;
    cpId: number;
    linkedinUrl: string;
    crmLink: string;
    maxEmp: number;
    mavgTrend: number;
    weight: number;
    maTrend: number;
    tags: string;
    location: string;
    calculatedLocation: string;
    graph: string;
    graphBig: string;
    data: any;
    eng: number;
    sales: number;
    percentEng: number;
    percentSales: number;
    growth6Eng: number;
    growth6Sales: number;
    cbLastFundingDate: string;
    cbLastSeries: string;
    cbLastPremoneyUsd: string;
    color: string;
    ignore: boolean;
    robscore: number;
    educationScore: number;
}

export interface ICompaniesResult {
    data: ICompany[];
    lastUpdated: string;
}
