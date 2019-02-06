import { Component, OnInit, Input } from '@angular/core';
import { ILineItem } from "../../../../core/line-item/i-line-item";

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnInit {

  @Input() lineItems: ILineItem[];
  constructor() { }

  ngOnInit() {
  }

}
