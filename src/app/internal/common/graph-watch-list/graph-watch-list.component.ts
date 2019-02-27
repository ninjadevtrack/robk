import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {MatSort, Sort} from '@angular/material';
import {fromMatSort, sortRows} from './../../../core/datasource-utils';
import {GraphWatchListService} from "../../../core/graph-watch-list/graph-watch-list.service";
import {ICompany, ICompanyValue} from "../../../core/graph-watch-list/model/company.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {of} from "rxjs";
import {EScaling} from "../../../core/scaling/scaling.enum";
import {ScalingService} from "../../../core/scaling/scaling.service";

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
  scalings: EScaling[] = [EScaling.SEED, EScaling.GROWTH, EScaling.SCALING, EScaling.ALL_DEALS];
  companyValuesToDisplay$: Observable<ICompanyValue[]>;
  form: FormGroup;
  sortEvents$: Observable<Sort>;
  filteredCompanyValuesCount: number;

  constructor(
      private _graphWatchlistService: GraphWatchListService,
      private _scalingSerivce: ScalingService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      tags: [[], []],
      cities: [[], []],
      search: ['', []],
      scaling: [EScaling.SEED, [Validators.required]]
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
    const scaling = this.form.controls['scaling'].value;

    this.companyValuesToDisplay$ = (of(this.companies)).pipe(
        map((co: ICompany[]) => {
          let filteredCompanyValues = co.map(c => c.value);
          let cvTags;

          // First of all filter it out according to scaling
          if (scaling) {
              filteredCompanyValues = filteredCompanyValues.filter((cv) => {
                let result;

                switch (scaling) {
                  case EScaling.SCALING:
                    result = cv.maxEmp >= 30 && cv.maxEmp < 100;
                    break;
                  case EScaling.GROWTH:
                    result = cv.maxEmp >= 100;
                    break;
                  case EScaling.SEED:
                    result = cv.maxEmp < 30;
                    break;
                  case EScaling.ALL_DEALS:
                    result = true;
                    break;
                  default:
                    result = true;
                    break;
                }

                return result;
              });
          }

          // filter companies by tags, cities and search if they are defined
          if (tags.length > 0 || cities.length > 0 || search) {
              filteredCompanyValues = filteredCompanyValues.filter(cv => {
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
          }

          this.filteredCompanyValuesCount = filteredCompanyValues.length;
          return filteredCompanyValues;
        }),
        sortRows(this.sortEvents$));
  }

  getScalingName(scaling: EScaling) {
    return this._scalingSerivce.getScalingName(scaling);
  }

}
