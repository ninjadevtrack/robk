import {
    Component,
    OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'laconic-public-entry',
    providers: [
    ],
    template: `
        <div class="m-b-2xl text-center m-t-6xl">
            <a routerLink="/"><img [src]="logo" height="82px"></a>
        </div>
        <router-outlet></router-outlet>`
})
export class PublicEntryComponent implements OnInit {
    public logo = 'assets/img/logo-dark.svg';
    public name = 'Teachable';

    /**
     * TypeScript public modifiers
     */
    constructor(
        private _router: Router
    ) {}

    public ngOnInit() {
    }
}
