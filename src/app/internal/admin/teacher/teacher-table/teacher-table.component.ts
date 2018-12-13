import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { ITeacher } from '../../../../core/teacher/model/teacher.model';

@Component({
    selector: 'teacher-table',
    styleUrls: [ './teacher-table.component.css'],
    templateUrl: './teacher-table.component.html'
})
export class TeacherTableComponent implements OnInit {

    @Input() teachers: ITeacher[];
    @Input() isActive: boolean;
    @Output() onTeachersEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onTeacherChanged(event: any) {
        this.onTeachersEvent.emit();
    }

}
