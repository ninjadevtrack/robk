import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { of  } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material';
import { fromMatSort, sortRows, fromMatPaginator, paginateRows } from './../../../core/datasource-utils';


import {GraphWatchListService} from "../../../core/graph-watch-list/graph-watch-list.service";
import {ICompany, ICompanyValue} from "../../../core/graph-watch-list/model/company.model";

@Component({
  selector: 'app-graph-watch-list',
  templateUrl: './graph-watch-list.component.html',
  styleUrls: ['./graph-watch-list.component.scss']
})
export class GraphWatchListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  companies: ICompany[];
  sortedCompanyValues$: Observable<ICompanyValue[]>;

  constructor(
      private _graphWatchlistService: GraphWatchListService
  ) { }

  ngOnInit() {

    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);

    this._graphWatchlistService.getCompanies().subscribe((companies: ICompany[]) => {
      this.companies = companies;
      this.sortedCompanyValues$ = of(this.companies.map(c => c.value));
    });

    sortEvents$.subscribe((s) => {
      if (this.companies) {
        this.sortedCompanyValues$ = (of(this.companies.map(c => c.value))).pipe(sortRows(of(s)));
      }
    });

    // this.sortedCompanyValues$ = this.companies$.pipe(sortRows(sortEvents$));

  }

}

/*
* console.log(this.sort.sortables);
    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    const pageEvents$: Observable<PageEvent> = fromMatPaginator(this.paginator);

    const rows$ = of(exampleShips);

    this.totalRows$ = rows$.pipe(map(rows => rows.length));
    this.displayedRows$ = rows$.pipe(sortRows(sortEvents$), paginateRows(pageEvents$));
*
*
* */
