import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material';
import { fromMatSort, sortRows} from './../../../core/datasource-utils';


import {GraphWatchListService} from "../../../core/graph-watch-list/graph-watch-list.service";
import {ICompany, ICompanyValue} from "../../../core/graph-watch-list/model/company.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-graph-watch-list',
  templateUrl: './graph-watch-list.component.html',
  styleUrls: ['./graph-watch-list.component.scss']
})
export class GraphWatchListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  companies$: Observable<ICompany[]>;
  tags: string[] = [];
  sortedCompanyValues$: Observable<ICompanyValue[]>;
  form: FormGroup;

  constructor(
      private _graphWatchlistService: GraphWatchListService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      tags: [[], []]
    });

    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    this.companies$ = this._graphWatchlistService.getCompanies();
    this.sortedCompanyValues$ = this.companies$.pipe(
        map(co => co.map(c => c.value)), sortRows(sortEvents$));

    // Let's collect all unique tags
    this.companies$.subscribe((cmps: ICompany[]) => {
        let tags;
        cmps.forEach(cmp => {
          tags = cmp.value.tags.split(',');
          tags = tags.map(t => t.trim());
          tags.forEach(tag => {
            if (tag && !this.tags.includes(tag)) {
              this.tags.push(tag);
            }
          });
        });
        this.tags.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    });
  }

}
