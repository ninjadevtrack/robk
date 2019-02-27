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
  cities: string[] = [];
  companyValuesToDisplay$: Observable<ICompanyValue[]>;
  form: FormGroup;
  sortEvents$: Observable<Sort>;
  filteredCompanyValuesCount: number;

  constructor(
      private _graphWatchlistService: GraphWatchListService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      tags: [[], []],
      cities: [[], []],
      search: ['', []]
    });
    this.sortEvents$ = fromMatSort(this.sort);

    this._graphWatchlistService.getCompanies().subscribe((companies: ICompany[]) => {

      this.companies = companies;
      this.updateCompanyValuesToDisplay();

      // Let's collect all unique tags and cities
      let tags, city;
      companies.forEach(cmp => {
        tags = cmp.value.tags.split(',').map(t => t.trim());
        tags.forEach(tag => {
          if (tag && !this.tags.includes(tag)) {
            this.tags.push(tag);
          }
        });

        city = cmp.value.location.split(',')[0].trim();
        if (city && !this.cities.includes(city)) {
          this.cities.push(city);
        }
      });
      this.tags.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      this.cities.sort();
    });
  }

  private updateCompanyValuesToDisplay() {

    const tags = this.form.controls['tags'].value;
    const cities = this.form.controls['cities'].value;
    const search = this.form.controls['search'].value;

    this.companyValuesToDisplay$ = (of(this.companies)).pipe(
        map((co: ICompany[]) => {
          const companyValues = co.map(c => c.value);
          let cvTags;

          // If there are no tags and cities defined then just return companies
          if (tags.length === 0 && cities.length === 0 && !search) {
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

            if (cities.includes(cv.location.split(',')[0].trim())
              || cv.name.toLowerCase().includes(search.toLowerCase())) {
              return true;
            }


            return false;
          });
          this.filteredCompanyValuesCount = filteredCompanyValues.length;
          return filteredCompanyValues;
        }),
        sortRows(this.sortEvents$));
  }

}
