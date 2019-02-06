import { Component, OnInit, Input } from '@angular/core';
import { ILineItem } from "../../../../core/line-item/i-line-item";

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {

  @Input() lineItem: ILineItem;
  constructor() { }

  ngOnInit() {
  }

}
