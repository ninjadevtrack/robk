import { Component, OnInit, Input } from '@angular/core';
import {IIndividualLessonStateChangeLogEntry} from '../../../../../core/individual-lesson/model/individual-lesson-state-change-log-entry.interface';
import {IndividualLessonStateChangeInterpreterService} from '../../../../../core/individual-lesson/individual-lesson-state-change-interpreter.service';

@Component({
  selector: 'app-individual-lesson-history',
  templateUrl: './individual-lesson-history.component.html',
  styleUrls: ['./individual-lesson-history.component.scss']
})
export class IndividualLessonHistoryComponent implements OnInit {

  @Input() logEntries: IIndividualLessonStateChangeLogEntry[];

  constructor(
      private _individualLessonStateChangeInterpreterService: IndividualLessonStateChangeInterpreterService
  ) { }

  ngOnInit() {

  }

  interpret(logEntry: IIndividualLessonStateChangeLogEntry) {
    return this._individualLessonStateChangeInterpreterService.interpret(logEntry);
  }

}
