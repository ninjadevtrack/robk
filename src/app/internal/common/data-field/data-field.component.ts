import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'data-field',
    styleUrls: [ './data-field.component.scss'],
    templateUrl: './data-field.component.html'
})
export class DataFieldComponent implements OnInit {

    @Input() header: string;
    @Input() data: any;
    @Input() url: string;
    @Input() isSmall: false;

    constructor (
        private _router: Router
    ) { }

    public ngOnInit() { }

    navigateByUrl() {
        this._router.navigateByUrl(this.url);
    }

}
