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
  displayedColumns: string[] = ['campaignName', 'device', 'geo', 'interest', 'gender', 'ageCategory'];
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
    console.log(`Rendering begins ${(new Date()).toISOString()}`);
    this.dataSource = new MatTableDataSource<ILineItem>(this._lineItems);
    setTimeout(() => { this.dataSource.paginator = this.paginator; }, 100);
    console.log(`Rendering ends ${(new Date()).toISOString()}`);
  }

}
