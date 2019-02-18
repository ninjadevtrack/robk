import { Component, OnInit, Input } from '@angular/core';
import { IBasic } from "../../../../core/basic/basic";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag: IBasic;

  constructor() { }

  ngOnInit() {
  }

}
