import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import { addHours, addDays } from 'date-fns';
import { TeacherService } from '../../core/teacher/teacher.service';
import {ITeacher} from '../../core/teacher/model/teacher.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../core/student/student.service';
import {IStudent} from '../../core/student/model/student.model';
import {IIndividualLesson} from '../../core/individual-lesson/model/individual-lesson.model';
import {IndividualLessonService} from '../../core/individual-lesson/individual-lesson.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    filtersForm: FormGroup;
    view: string = 'week';
    viewDate: Date = new Date();
    daysCount: number = 5;
    events: CalendarEvent[] = [];
    eventsPerDayCount: number = 4;
    refresh: Subject<any> = new Subject();
    teachers: ITeacher[] = [];
    students: IStudent[] = [];
    individualLessons: IIndividualLesson[] = [];

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
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.filtersForm = this._formBuilder.group({
            teachers: ['', [Validators.required]],
            students: ['', [Validators.required]]
        });

        this.getTeachers();
        this.getStudents();
        this.getIndividualLessons();
    }

    private getIndividualLessons() {
        this._individualLessonService.getAll().subscribe((individualLessons: IIndividualLesson[]) => {
            this.individualLessons = individualLessons;
            this.initEvents();
        });
    }

    private getStudents() {
        this._studentService.getAllActive().subscribe((students: IStudent[]) => {
            this.students = students;
        });
    }

    private getTeachers() {
        this._teacherService.getAllActive().subscribe((teachers: ITeacher[]) => {
            this.teachers = teachers;
        });
    }

    initEvents () {

        this.events = this.individualLessons.map((il) => {
            return {
                title: `${il.title} - ${il.teacher.user.lastName} ${il.teacher.user.firstName} ${il.student.user.lastName} ${il.student.user.firstName}`,
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

    private getColor(teacher: ITeacher) {
        const index = this.teachers.findIndex((t) => t._id === teacher._id);

        if (index === -1) { return CalendarColors[CalendarColors.length - 1]; }

        return (CalendarColors.length >= this.teachers.length) ? CalendarColors[index] : CalendarColors[this.teachers.length % CalendarColors.length];
    }

}

export const CalendarColors: any = [
    {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    {
        primary: '#09a500',
        secondary: '#95fd8e'
    },
    {
        primary: '#045700',
        secondary: '#64a95e'
    },
    {
        primary: '#2c3ca5',
        secondary: '#95b2fd'
    },
    {
        primary: '#ad2121',
        secondary: '#fa8581'
    },
    {
        primary: '#e3bc08',
        secondary: '#fde468'
    },
];
