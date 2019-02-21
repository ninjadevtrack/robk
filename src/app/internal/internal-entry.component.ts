import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'robscore-internal-entry',
    providers: [
    ],
    template: `
        <robscore-internal-header></robscore-internal-header>
		<router-outlet></router-outlet>
    `
})
export class InternalEntryComponent implements OnInit {

    constructor() {}

    public ngOnInit() {
    }
}
