import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { ILineItem } from "../../../../core/line-item/i-line-item";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnInit {

  @Input() lineItems: ILineItem[];
  displayedColumns: string[] = ['campaignName', 'device', 'geo', 'interest', 'gender', 'ageCategory'];
  dataSource: MatTableDataSource<ILineItem>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    console.log(`Rendering begins ${(new Date()).toISOString()}`);
    this.dataSource = new MatTableDataSource<ILineItem>(this.lineItems);
    setTimeout(() => { this.dataSource.paginator = this.paginator; }, 1);
    console.log(`Rendering ends ${(new Date()).toISOString()}`);
  }

}
