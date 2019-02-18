import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { IBasic } from "../../../../core/basic/basic";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag: IBasic;
  @Output() deleted: EventEmitter<IBasic> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteTag() {
    this.deleted.emit(this.tag);
  }

}
