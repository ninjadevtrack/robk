import { Component, OnInit, Input } from '@angular/core';
import { IActivityRecord } from '../models/activity-record.model';

@Component({
  selector: 'app-activity-record-list',
  templateUrl: './activity-record-list.component.html',
  styleUrls: ['./activity-record-list.component.scss']
})
export class ActivityRecordListComponent implements OnInit {

  @Input() activityRecords: IActivityRecord[];

  constructor() { }

  ngOnInit() {
  }

}
