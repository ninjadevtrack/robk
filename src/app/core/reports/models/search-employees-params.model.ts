export enum EmployeeSearchField {
    OCCUPATION = "OCCUPATION",
    HISTORY_DESCRIPTION = "HISTORY_DESCRIPTION"
}

export interface ISearchEmployeesParams {
    regex: string;
    searchField: EmployeeSearchField;
    pageNumber?: number;
    pageSize?: number;
}
