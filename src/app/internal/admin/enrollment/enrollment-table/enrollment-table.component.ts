import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IEnrollment } from "../../../../core/enrollment/model/enrollment.model";

@Component({
    selector: 'enrollment-table',
    styleUrls: [ './enrollment-table.component.css'],
    templateUrl: './enrollment-table.component.html'
})
export class EnrollmentTableComponent implements OnInit {

    @Input() enrollments: IEnrollment[];
    @Input() isActive: boolean;
    @Output() onEnrollmentsEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onMediaPlanChanged(event: any){
        this.onEnrollmentsEvent.emit();
    }

    public getServicesString(enrollment: IEnrollment) {
        const shortener = 20;
        const delimeter = '..., ';
        const shortenedString = enrollment.services.reduce((acc, service) =>  acc + service.name.substr(0, shortener) + delimeter, '');
        return shortenedString.substr(0, shortenedString.length - delimeter.length);
    }

}
