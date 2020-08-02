import { Component, OnInit } from "@angular/core";

@Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: "robscore-public-header", // <robscore-public-header></robscore-public-header>
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class PublicHeaderComponent implements OnInit {
    public logo = "assets/img/logo-white.svg";

    /**
     * TypeScript public modifiers
     */
    constructor() {}

    public ngOnInit() {}
}
