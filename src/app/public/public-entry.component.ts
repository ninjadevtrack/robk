import {
    Component,
    OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: 'laconic-public-entry',
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [
    ],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
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

    public ngOnInit() { }
}
