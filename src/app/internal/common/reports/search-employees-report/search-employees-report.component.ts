import { Component, OnInit } from '@angular/core';
import { PeopleWatchService } from "src/app/core/reports/peoplewatch.service";
import { IReportCEntity } from "src/app/core/reports/models/report-c.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SearchPipe } from "src/app/internal/core/search.pipe";
import { SmoothScrollService } from "src/app/core/smooth-scroll.service";
import { ISearchEmployeesEntity } from 'src/app/core/reports/models/search-employees.model';

@Component({
  selector: 'app-search-employees-report',
  templateUrl: './search-employees-report.component.html',
  styleUrls: ['./search-employees-report.component.scss']
})
export class SearchEmployeesReportComponent implements OnInit {
    entities: ISearchEmployeesEntity[];
    form: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _peopleWatchService: PeopleWatchService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngOnInit(): void {
        this.entities = [];
        this.form = this._formBuilder.group({
            search: ["", []]
        });
        
        this._smoothScrollService.scrollTo(0, 0);
    }

    searchOnKeyUp(event) {
        if (event.code !== 'Enter') { return; }
        
        this.entities = [];
        const regex = this.form.controls["search"].value;
        const model = {regex, pageSize: 100, pageNumber: 1};
        this._peopleWatchService
            .searchEmployees(model)
            .subscribe((entities: ISearchEmployeesEntity[]) => {
                this.entities = entities;
            });
    }
}
