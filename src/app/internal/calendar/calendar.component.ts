import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent } from './angular-calendar';
import { TeacherService } from '../../core/teacher/teacher.service';
import {ITeacher} from '../../core/teacher/model/teacher.model';
import {StudentService} from '../../core/student/student.service';
import {IIndividualLesson} from '../../core/individual-lesson/model/individual-lesson.model';
import {IndividualLessonService} from '../../core/individual-lesson/individual-lesson.service';
import { CalendarColors} from './demo-utils/colors';
import {SmoothScrollService} from '../../core/smooth-scroll.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

    @Output() hourSegmentClicked: EventEmitter<any> = new EventEmitter();
    @Input() _individualLessons: IIndividualLesson[] = [];
    @ViewChild('weekView', { read: ElementRef }) weekView: ElementRef;
    view: string = 'week';
    viewDate: Date = new Date();
    events: CalendarEvent[] = [];
    refresh: Subject<any> = new Subject();

    @Input() set individualLessons(value: IIndividualLesson[]) {
        this._individualLessons = value;
        this.initEvents();
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
    }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }

    constructor(
        private _teacherService: TeacherService,
        private _studentService: StudentService,
        private _individualLessonService: IndividualLessonService,
        private _smoothScrollService: SmoothScrollService
    ) {}

    ngAfterViewInit() {
        this._smoothScrollService.scrollWithinElement('cal-time-events-wrapper', 400);
    }

    ngOnInit() {

    }

    initEvents () {

        if (this._individualLessons) {
            this.events = this._individualLessons.map((il) => {
                return {
                    title: `${il.teacher.user.firstName} ${il.teacher.user.lastName} teaching ${il.student.user.firstName} ${il.student.user.lastName} - ${il.title}`,
                    color: this.getColor(il.teacher),
                    start: new Date(il.start),
                    end: new Date(il.end),
                    draggable: true,
                    resizable: {
                        beforeStart: true, // this allows you to configure the sides the event is resizable from
                        afterEnd: true
                    },
                    meta: il
                };
            });
        }
    }

    private getColor(teacher: ITeacher) {

        const teachers = Array.from(new Set(this._individualLessons.map((il) => il.teacher)));

        const index = teachers.findIndex((t) => t._id === teacher._id);

        if (index === -1) { return CalendarColors[CalendarColors.length - 1]; }

        return (CalendarColors.length >= teachers.length) ? CalendarColors[index] : CalendarColors[teachers.length % CalendarColors.length];
    }

    monthViewDayClicked(event) {
        if (this.events.filter((e) => e.start.toDateString() === event.day.date.toDateString()).length > 0) {
            this.viewDate = event.day.date;
        }
    }

    emitHourSegmentClicked(event) {
        this.hourSegmentClicked.emit(event);
    }

}
