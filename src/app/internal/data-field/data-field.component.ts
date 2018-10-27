import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'data-field',
    styleUrls: [ './data-field.component.scss'],
    templateUrl: './data-field.component.html'
})
export class DataFieldComponent implements OnInit {

    @Input() header: string;
    @Input() data: any;
    @Input() isSmall: false;

    constructor () { }

    public ngOnInit() { }

}
