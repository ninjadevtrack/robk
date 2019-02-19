import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { ILineItem } from "../../../../core/line-item/i-line-item";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import {IComment} from "../../../../core/common/models/comment.model";

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnInit {

  _lineItems: ILineItem[];
  displayedColumns: string[] = ['campaignName', 'device', 'geo', 'interest', 'audience', 'gender', 'ageCategory'];
  dataSource: MatTableDataSource<ILineItem>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  @Input() set lineItems(value: ILineItem[]) {
    this._lineItems = value;
    this.rebuildDataTable();
  }

  ngOnInit() {
  }

  rebuildDataTable() {
    this.dataSource = new MatTableDataSource<ILineItem>(this._lineItems);
    this.dataSource.paginator = this.paginator;
  }

  shortenString(s: string, n: number) {
    return s.substr(0, n) + '...';
  }

}
