import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import {filter, map} from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material';
import { fromMatSort, sortRows} from './../../../core/datasource-utils';


import {GraphWatchListService} from "../../../core/graph-watch-list/graph-watch-list.service";
import {ICompany, ICompanyValue} from "../../../core/graph-watch-list/model/company.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {from, of} from "rxjs";

@Component({
  selector: 'app-graph-watch-list',
  templateUrl: './graph-watch-list.component.html',
  styleUrls: ['./graph-watch-list.component.scss']
})
export class GraphWatchListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  companies: ICompany[];
  tags: string[] = [];
  companyValuesToDisplay$: Observable<ICompanyValue[]>;
  form: FormGroup;
  sortEvents$: Observable<Sort>;

  constructor(
      private _graphWatchlistService: GraphWatchListService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      tags: [[], []]
    });
    this.sortEvents$ = fromMatSort(this.sort);

    this._graphWatchlistService.getCompanies().subscribe((companies: ICompany[]) => {

      this.companies = companies;
      this.updateCompanyValuesToDisplay([]);

      // Let's collect all unique tags
      let tags;
      companies.forEach(cmp => {
        tags = cmp.value.tags.split(',').map(t => t.trim());
        tags.forEach(tag => {
          if (tag && !this.tags.includes(tag)) {
            this.tags.push(tag);
          }
        });
      });
      this.tags.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    });
  }

  private updateCompanyValuesToDisplay(tags: string[]) {
    this.companyValuesToDisplay$ = (of(this.companies)).pipe(
        map((co: ICompany[]) => {
          const companyValues = co.map(c => c.value);
          let cvTags;

          // If there are no tags defined then just return companies
          if (tags.length === 0) {
            return companyValues;
          }

          // Otherwise, filter companies by tags
          const filteredCompanyValues = companyValues.filter(cv => {
            cvTags = cv.tags.split(',').map(t => t.trim());

            for (let i = 0; i < tags.length; i++) {
              for (let j = 0; j < cvTags.length; j++) {
                if (tags[i] === cvTags[j]) {
                  return true;
                }
              }
            }

            return false;
          });
          console.log(filteredCompanyValues);
          return filteredCompanyValues;
        }),
        sortRows(this.sortEvents$));
  }

  selectedTagsChanged(event) {
    console.log(event);
    this.updateCompanyValuesToDisplay(event.value);
  }

}
