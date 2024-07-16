export enum EmployeeSearchField {
    OCCUPATION = "OCCUPATION",
    HISTORY_DESCRIPTION = "HISTORY_DESCRIPTION",
    BOTH = "BOTH",
    OCCUPATION_EU = "OCCUPATION_EU",
    HISTORY_DESCRIPTION_EU = "HISTORY_DESCRIPTION_EU",
    BOTH_EU = "BOTH_EU"
}

export interface ISearchEmployeesParams {
    regex: string;
    searchField: EmployeeSearchField;
    pageNumber?: number;
    pageSize?: number;
}
