import { Component, OnInit } from '@angular/core';
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { IReportCEntity } from "src/app/core/reports/models/report-c.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";
import { ISearchEmployeesEntity } from 'src/app/core/reports/models/search-employees.model';
import { NotSpacesStringValidator } from 'src/app/core/validators/not-spaces-string-validator';

@Component({
  selector: 'app-search-employees-report',
  templateUrl: './search-employees-report.component.html',
  styleUrls: ['./search-employees-report.component.scss']
})
export class SearchEmployeesReportComponent implements OnInit {
    entities: ISearchEmployeesEntity[];
    form: FormGroup;
    isDataLoading: boolean;

    constructor(
        private _formBuilder: FormBuilder,
        private _peopleWatchService: PeopleWatchService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngOnInit(): void {
        this.isDataLoading = false;
        this.form = this._formBuilder.group({
            search: ["", [
                Validators.required,
                NotSpacesStringValidator()
            ]]
        });
        this._smoothScrollService.scrollTo(0, 0);
    }

    searchOnKeyUp(event) {
        if (event.code !== 'Enter') { return; }
        this.search();
    }

    search() {
        if (!this.form.valid) { return; }

        this.isDataLoading = true;
        this.entities = null;
        const regex = this.form.controls["search"].value;
        const model = {regex, pageSize: 100, pageNumber: 1};
        this._peopleWatchService
            .searchEmployees(model)
            .subscribe((entities: ISearchEmployeesEntity[]) => {
                this.entities = entities;
                this.isDataLoading = false;
            });
    }
}
