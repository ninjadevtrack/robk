import { Component, OnInit, Input } from '@angular/core';
import {IIndividualLessonStateChangeLogEntry} from '../../../../../core/individual-lesson/model/individual-lesson-state-change-log-entry.interface';
import {IndividualLessonStateChangeInterpreterService} from '../../../../../core/individual-lesson/individual-lesson-state-change-interpreter.service';
import {IComment} from '../../../../../core/common/models/comment.model';
import {IUser} from '../../../../../core/user/model/user.model';
import {IActivityRecord} from '../../../activity-record/models/activity-record.model';

@Component({
  selector: 'app-individual-lesson-history',
  template: `<app-activity-record-list [activityRecords]="activityRecords"></app-activity-record-list>`,
})
export class IndividualLessonActivityComponent implements OnInit {

    _logEntries: IIndividualLessonStateChangeLogEntry[] = [];
    _comments: IComment[] = [];
    activityRecords: IActivityRecord[] = [];

    @Input() set logEntries(value: IIndividualLessonStateChangeLogEntry[]) {
        this._logEntries = value;
        this.rebuildActivityRecords();
    }

    @Input() set comments(value: IComment[]) {
       this._comments = value;
       this.rebuildActivityRecords();
    }

    constructor(
        private _individualLessonStateChangeInterpreterService: IndividualLessonStateChangeInterpreterService
    ) { }

    ngOnInit() { }

    interpret(logEntry: IIndividualLessonStateChangeLogEntry) {
        return this._individualLessonStateChangeInterpreterService.interpret(logEntry);
    }

    rebuildActivityRecords() {
      this.activityRecords = this._logEntries.map((le) => { return {
            user: le.user,
            message: this.interpret(le),
            createdAt: le.createdAt
        }; }).concat(this._comments.map((c) => { return {
            user: c.user,
            message: `commented: ${c.comment}`,
            createdAt: c.createdAt
        }; })).sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime());
    }

}
