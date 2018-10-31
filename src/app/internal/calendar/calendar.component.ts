import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    view: string = 'week';
    viewDate: Date = new Date();

    events: CalendarEvent[] = [
        {
            title: 'Draggable event',
            color: colors.yellow,
            start: new Date(),
            draggable: true
        },
        {
            title: 'A non draggable event',
            color: colors.red,
            start: new Date()
        },
        {
            title: 'One more draggable event',
            color: colors.red,
            start: new Date(),
            draggable: true
        }
    ];

    refresh: Subject<any> = new Subject();

    eventTimesChanged({
        event,
        newStart,
        newEnd
    }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }


    constructor() { }

    ngOnInit() {
    }

}

export const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
