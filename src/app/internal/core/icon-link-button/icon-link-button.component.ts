import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-link-button',
  templateUrl: './icon-link-button.component.html',
  styleUrls: ['./icon-link-button.component.scss']
})
export class IconLinkButtonComponent implements OnInit {

  @Input() iconName;

  constructor() { }

  ngOnInit() {
  }

}
