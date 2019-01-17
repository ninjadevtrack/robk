import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'laconic-internal-entry',
    providers: [
    ],
    template: `
        <laconic-internal-header></laconic-internal-header>
		<router-outlet></router-outlet>
    `
})
export class InternalEntryComponent implements OnInit {

    constructor() {}

    public ngOnInit() {
        console.log('Internal entry component');
    }
}
