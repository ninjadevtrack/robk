import { Component, OnInit, Input } from '@angular/core';
import {IIndividualLessonStateChangeLogEntry} from '../../../../../core/individual-lesson/model/individual-lesson-state-change-log-entry.interface';

@Component({
  selector: 'app-individual-lesson-history',
  templateUrl: './individual-lesson-history.component.html',
  styleUrls: ['./individual-lesson-history.component.scss']
})
export class IndividualLessonHistoryComponent implements OnInit {

  @Input() logEntries: IIndividualLessonStateChangeLogEntry[];

  constructor() { }

  ngOnInit() {

  }

}
