import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import { addHours, addDays } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    view: string = 'week';
    viewDate: Date = new Date();
    daysCount: number = 5;
    events: CalendarEvent[] = [];
    eventsPerDayCount: number = 4;
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
        this.initEvents();
    }

    initEvents () {
        let start;
        for (let i = 0; i < this.daysCount; i++) {
            for (let j = 0; j < this.eventsPerDayCount; j++) {
                start = addHours( addDays(new Date(), i), -j);
                this.events.push({
                    title: 'Event 2',
                    color: colors.blue,
                    start: start,
                    end: addHours(start, 2),
                    draggable: true,
                    resizable: {
                        beforeStart: true, // this allows you to configure the sides the event is resizable from
                        afterEnd: true
                    }
                });
            }
        }
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
