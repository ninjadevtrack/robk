import { Component, OnInit } from '@angular/core';
import {GraphWatchListService} from "../../../core/graph-watch-list/graph-watch-list.service";
import {ICompany} from "../../../core/graph-watch-list/model/company.model";

@Component({
  selector: 'app-graph-watch-list',
  templateUrl: './graph-watch-list.component.html',
  styleUrls: ['./graph-watch-list.component.scss']
})
export class GraphWatchListComponent implements OnInit {

  companies: ICompany[];

  constructor(
      private _graphWatchlistService: GraphWatchListService
  ) { }

  ngOnInit() {
    this._graphWatchlistService.getCompanies().subscribe((companies: ICompany[]) => {
      this.companies = companies;
    });
  }

}
