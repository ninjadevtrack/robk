import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: 'robscore-footer',  // <robscore-footer></robscore-footer>
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [
    ],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class PublicFooterComponent implements OnInit {
    public logo = 'assets/img/logo-white.svg';
    public name = 'Teachable';

    /**
     * TypeScript public modifiers
     */
    constructor(
    ) {}

    public ngOnInit() {}
}
