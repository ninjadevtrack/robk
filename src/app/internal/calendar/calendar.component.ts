import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarEvent, CalendarEventTimesChangedEvent} from './angular-calendar';
import {TeacherService} from '../../core/teacher/teacher.service';
import {ITeacher} from '../../core/teacher/model/teacher.model';
import {StudentService} from '../../core/student/student.service';
import {IIndividualLesson} from '../../core/individual-lesson/model/individual-lesson.model';
import {IndividualLessonService} from '../../core/individual-lesson/individual-lesson.service';
import {CalendarColors} from './utils/colors';
import {SmoothScrollService} from '../../core/smooth-scroll.service';
import {IStudent} from '../../core/student/model/student.model';
import {CalendarColoringModes} from './utils/calendar-coloring-modes.enum';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

    @Output() individualLessonClicked: EventEmitter<IIndividualLesson> = new EventEmitter<IIndividualLesson>();
    @Output() hourSegmentClicked: EventEmitter<any> = new EventEmitter();
    @Input() _individualLessons: IIndividualLesson[] = [];
    @Input() coloringMode: CalendarColoringModes = CalendarColoringModes.BY_STUDENT;
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
                    title: `${il.title} - ${il.teacher.user.firstName} ${il.teacher.user.lastName} with ${il.student.user.firstName} ${il.student.user.lastName} `,
                    color: (this.coloringMode === CalendarColoringModes.BY_TEACHER) ? this.getColorByTeacher(il.teacher) : this.getColorByStudent(il.student),
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

    getColorByTeacher(teacher: ITeacher) {
        const teacherIds = Array.from(new Set(
            this._individualLessons
                .map((il) => il.teacher._id)
                .sort((a, b) => (a > b) ? 1 : -1 )));
        return this.getColor(teacherIds, teacher._id);
    }

    getColorByStudent(student: IStudent) {
        const studentIds = Array.from(new Set(
            this._individualLessons
                .map((il) => il.student._id)
                .sort((a, b) => (a > b) ? 1 : -1 )));
        return this.getColor(studentIds, student._id);
    }

    getColor(entitysIds: string[], entityId) {
        const index = entitysIds.findIndex((id) => id === entityId);

        if (index === -1) { return CalendarColors[CalendarColors.length - 1]; }

        return (CalendarColors.length >= entitysIds.length) ? CalendarColors[index] : CalendarColors[entitysIds.length % CalendarColors.length];
    }


    monthViewDayClicked(event) {
        if (this.events.filter((e) => e.start.toDateString() === event.day.date.toDateString()).length > 0) {
            this.viewDate = event.day.date;
        }
    }

    emitHourSegmentClicked(event) {
        this.hourSegmentClicked.emit(event);
    }

    eventClicked(event) {
        this.individualLessonClicked.emit(event.event.meta);
    }

}
