import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material';
import { fromMatSort, sortRows} from './../../../core/datasource-utils';


import {GraphWatchListService} from "../../../core/graph-watch-list/graph-watch-list.service";
import {ICompany, ICompanyValue} from "../../../core/graph-watch-list/model/company.model";

@Component({
  selector: 'app-graph-watch-list',
  templateUrl: './graph-watch-list.component.html',
  styleUrls: ['./graph-watch-list.component.scss']
})
export class GraphWatchListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  companies$: Observable<ICompany[]>;
  sortedCompanyValues$: Observable<ICompanyValue[]>;

  constructor(
      private _graphWatchlistService: GraphWatchListService
  ) { }

  ngOnInit() {
    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    this.companies$ = this._graphWatchlistService.getCompanies();
    this.sortedCompanyValues$ = this.companies$.pipe(
        map(co => co.map(c => c.value)), sortRows(sortEvents$));
  }

}
